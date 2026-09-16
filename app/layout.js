import './globals.css';

export const metadata={title:'Dokter Jaga',description:'Clinical learning platform untuk dokter Indonesia'};

export default function Layout({children}){
  return <html lang='id'><body>{children}</body></html>;
}
