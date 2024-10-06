import instance from '@/apis/axios';
import { LoginInputs, SignUpInputs } from '../types';

export const accountApis = {
  authSignup: (data: SignUpInputs) => instance.post(`/auth/signup`, data),
  authSendCode: (data: { email: string }) => instance.post(`/auth/email-verification/send-code`, data),
  authVerifyCode: (data: { email: string; code: string }) =>
    instance.post(`/auth/email-verification/verify-code`, data),
  authRefresh: (data: { refreshToken: string }) => instance.post(`/auth/refresh`, data),
  authLogout: () => instance.post(`/auth/logout`),
  authLogin: (data: LoginInputs) => instance.post(`/auth/login`, data),
};
