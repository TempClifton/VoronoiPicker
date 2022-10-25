THREE.SimplexNoise=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let s=0;s<256;s++)this.p[s]=Math.floor(256*t.random());this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[255&t];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,s,h){return t[0]*s+t[1]*h}dot3(t,s,h,r){return t[0]*s+t[1]*h+t[2]*r}dot4(t,s,h,r,i){return t[0]*s+t[1]*h+t[2]*r+t[3]*i}noise(t,s){let h,r,i;const e=(t+s)*(.5*(Math.sqrt(3)-1)),o=Math.floor(t+e),l=Math.floor(s+e),d=(3-Math.sqrt(3))/6,a=(o+l)*d,p=t-(o-a),m=s-(l-a);let n,M;p>m?(n=1,M=0):(n=0,M=1);const f=p-n+d,g=m-M+d,c=p-1+2*d,u=m-1+2*d,q=255&o,x=255&l,E=this.perm[q+this.perm[x]]%12,H=this.perm[q+n+this.perm[x+M]]%12,N=this.perm[q+1+this.perm[x+1]]%12;let R=.5-p*p-m*m;R<0?h=0:(R*=R,h=R*R*this.dot(this.grad3[E],p,m));let S=.5-f*f-g*g;S<0?r=0:(S*=S,r=S*S*this.dot(this.grad3[H],f,g));let T=.5-c*c-u*u;return T<0?i=0:(T*=T,i=T*T*this.dot(this.grad3[N],c,u)),70*(h+r+i)}noise3d(t,s,h){let r,i,e,o;const l=(t+s+h)*(1/3),d=Math.floor(t+l),a=Math.floor(s+l),p=Math.floor(h+l),m=1/6,n=(d+a+p)*m,M=t-(d-n),f=s-(a-n),g=h-(p-n);let c,u,q,x,E,H;M>=f?f>=g?(c=1,u=0,q=0,x=1,E=1,H=0):M>=g?(c=1,u=0,q=0,x=1,E=0,H=1):(c=0,u=0,q=1,x=1,E=0,H=1):f<g?(c=0,u=0,q=1,x=0,E=1,H=1):M<g?(c=0,u=1,q=0,x=0,E=1,H=1):(c=0,u=1,q=0,x=1,E=1,H=0);const N=M-c+m,R=f-u+m,S=g-q+m,T=M-x+2*m,b=f-E+2*m,j=g-H+2*m,k=M-1+.5,v=f-1+.5,w=g-1+.5,y=255&d,z=255&a,A=255&p,B=this.perm[y+this.perm[z+this.perm[A]]]%12,C=this.perm[y+c+this.perm[z+u+this.perm[A+q]]]%12,D=this.perm[y+x+this.perm[z+E+this.perm[A+H]]]%12,F=this.perm[y+1+this.perm[z+1+this.perm[A+1]]]%12;let G=.6-M*M-f*f-g*g;G<0?r=0:(G*=G,r=G*G*this.dot3(this.grad3[B],M,f,g));let I=.6-N*N-R*R-S*S;I<0?i=0:(I*=I,i=I*I*this.dot3(this.grad3[C],N,R,S));let J=.6-T*T-b*b-j*j;J<0?e=0:(J*=J,e=J*J*this.dot3(this.grad3[D],T,b,j));let K=.6-k*k-v*v-w*w;return K<0?o=0:(K*=K,o=K*K*this.dot3(this.grad3[F],k,v,w)),32*(r+i+e+o)}noise4d(t,s,h,r){const i=this.grad4,e=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,d=(5-Math.sqrt(5))/20;let a,p,m,n,M;const f=(t+s+h+r)*l,g=Math.floor(t+f),c=Math.floor(s+f),u=Math.floor(h+f),q=Math.floor(r+f),x=(g+c+u+q)*d,E=t-(g-x),H=s-(c-x),N=h-(u-x),R=r-(q-x),S=(E>H?32:0)+(E>N?16:0)+(H>N?8:0)+(E>R?4:0)+(H>R?2:0)+(N>R?1:0),T=e[S][0]>=3?1:0,b=e[S][1]>=3?1:0,j=e[S][2]>=3?1:0,k=e[S][3]>=3?1:0,v=e[S][0]>=2?1:0,w=e[S][1]>=2?1:0,y=e[S][2]>=2?1:0,z=e[S][3]>=2?1:0,A=e[S][0]>=1?1:0,B=e[S][1]>=1?1:0,C=e[S][2]>=1?1:0,D=e[S][3]>=1?1:0,F=E-T+d,G=H-b+d,I=N-j+d,J=R-k+d,K=E-v+2*d,L=H-w+2*d,O=N-y+2*d,P=R-z+2*d,Q=E-A+3*d,U=H-B+3*d,V=N-C+3*d,W=R-D+3*d,X=E-1+4*d,Y=H-1+4*d,Z=N-1+4*d,$=R-1+4*d,_=255&g,tt=255&c,st=255&u,ht=255&q,rt=o[_+o[tt+o[st+o[ht]]]]%32,it=o[_+T+o[tt+b+o[st+j+o[ht+k]]]]%32,et=o[_+v+o[tt+w+o[st+y+o[ht+z]]]]%32,ot=o[_+A+o[tt+B+o[st+C+o[ht+D]]]]%32,lt=o[_+1+o[tt+1+o[st+1+o[ht+1]]]]%32;let dt=.6-E*E-H*H-N*N-R*R;dt<0?a=0:(dt*=dt,a=dt*dt*this.dot4(i[rt],E,H,N,R));let at=.6-F*F-G*G-I*I-J*J;at<0?p=0:(at*=at,p=at*at*this.dot4(i[it],F,G,I,J));let pt=.6-K*K-L*L-O*O-P*P;pt<0?m=0:(pt*=pt,m=pt*pt*this.dot4(i[et],K,L,O,P));let mt=.6-Q*Q-U*U-V*V-W*W;mt<0?n=0:(mt*=mt,n=mt*mt*this.dot4(i[ot],Q,U,V,W));let nt=.6-X*X-Y*Y-Z*Z-$*$;return nt<0?M=0:(nt*=nt,M=nt*nt*this.dot4(i[lt],X,Y,Z,$)),27*(a+p+m+n+M)}};
//# sourceMappingURL=index.294a5950.js.map
