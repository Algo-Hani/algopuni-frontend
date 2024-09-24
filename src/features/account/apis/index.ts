import instance from '@/apis/axios';

export const accountApis = {
  authSignup: () => instance.post(`/auth/signup`),
  authSendCode: (data: { email: string }) => instance.post(`/auth/email-verification/send-code`, data),
  authVerifyCode: (data: { email: string; code: string }) =>
    instance.post(`/auth/email-verification/verify-code`, data),
  authRefresh: () => instance.post(`/auth/refresh`),
  authLogout: () => instance.post(`/auth/logout`),
  authLogin: () => instance.post(`/auth/login`),
};
