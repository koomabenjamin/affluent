import { ref, provide } from 'vue';
import { getActivePinia } from 'pinia';
import { customAxios } from '@/composables/axios';
import router from '@/router';
import { useUserStore } from '@/stores/user-store';

export interface UserCredentials {
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    middleName?: string;
    userName?: string;
}

export default function useAuthentication() {

    const pinia = getActivePinia()
    // if (!pinia) {
    //     throw new Error('Pinia not active. Did you call app.use(pinia)?')
    // }

    if (pinia) {
        const userStore = useUserStore();
        console.log(userStore, "<============ console message from auth composable");
    }

    const isAuthenticated = ref<boolean>(false);

    const errorMessages = ref<any>({});

    const mainErrorMessage = ref<any>({});

    const authLoader = ref<boolean>(false);

    const piniaBackend = ref(false);

    const login = (credentials: UserCredentials) => {

        if (!piniaBackend.value) {
            authLoader.value = true;

            customAxios.post('/login', credentials)
                .then((response) => {
                    // router.push({ path: '/' });
                    router.push({ path: '/2fa-verification' });
                    // const roles = response.data.roles;
                    // const permissions = response.data.permissions;
                    // if (roles.includes('Member') && roles.length === 1) router.push({ path: '/member' });
                    // else router.push({ path: '/' });
                    isAuthenticated.value = true;
                    sessionStorage.setItem('token', response.data.token);
                    sessionStorage.setItem('user', JSON.stringify(response.data.user));
                    authLoader.value = false;
                    // console.log(response.data, isAuthenticated.value, "<============ console message from auth composable")
                })
                .catch((error) => {
                    if (error.response) {
                        mainErrorMessage.value = error.response.data.message;
                        errorMessages.value = error.response.data.errors;
                    }
                    authLoader.value = true;
                    console.log(error, "<============ console message from auth composable");
                    router.push({ name: 'login' });
                })
                .finally(() => {
                    console.info('Authentication complete.', "<============ console message from auth composable");
                    authLoader.value = false;
                });
            // router.push({ path: '/'})
        } else {
            authLoader.value = true;
            setTimeout(() => {
                router.push({ path: '/2fa-verification' });
                isAuthenticated.value = true;
                sessionStorage.setItem('token', '');
                sessionStorage.setItem('user', JSON.stringify({}));
                authLoader.value = false;
            }, 2000);
        }
    }
    const twoFactorCodeConfirmation = async (opt: string) => {
        authLoader.value = true;
        if (!piniaBackend.value) {
            const response = await customAxios.post('/two_factor_code/check', { opt: opt });
            const roles = response.data.roles;
            const permissions = response.data.permissions;
            authLoader.value = false;
            if (
                response.data.message === "SUCCESS"
            ) return router.push({ path: '/' });
            else return router.push({ name: 'login' });
        } else {
            setTimeout(() => {
                const roles = [];
                const permissions = [];
            }, 2000);
            return router.push({ path: '/' });
        }
    }
    const register = (credentials: UserCredentials) => {

        authLoader.value = true;

        customAxios.post('/register', Object.assign(credentials, { name: `${credentials.firstName} ${credentials.lastName}` }))
            .then((response) => {
                console.log(response, "<============ console message from auth composable");
                if (response.data.message === "SUCCESS") router.push({ path: '/login' });
            })
            .catch((error) => {
                if (error.response) {
                    mainErrorMessage.value = error.response.data.message;
                    errorMessages.value = error.response.data.errors;
                }
                authLoader.value = true;
                console.log(error);
            })
            .finally(() => {
                console.info('Authentication complete.', "<============ console message from auth composable");
                authLoader.value = false;
            });
    }

    const logout = () => {
        sessionStorage.removeItem('user')
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('crsf-token')
        customAxios.defaults.headers.common['Authorization'] = '';
        isAuthenticated.value = false;
        router.push({ name: 'login' });
    }

    // provide('isAuthenticated', isAuthenticated);

    return {
        login,
        logout,
        register,
        errorMessages,
        isAuthenticated,
        authLoader,
        twoFactorCodeConfirmation,
    }
}