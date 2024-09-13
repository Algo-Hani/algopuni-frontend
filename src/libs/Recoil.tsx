import { PropsWithChildren } from 'react';
import { RecoilRoot } from 'recoil';

const Recoil = ({ children }: PropsWithChildren) => <RecoilRoot>{children}</RecoilRoot>;

export default Recoil;
