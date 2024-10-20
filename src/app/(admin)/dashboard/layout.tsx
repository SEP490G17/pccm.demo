// import AdminContent from '@/app/components/layout/admin.content';
// import AdminFooter from '@/app/components/layout/admin.footer';
// import AdminHeader from '@/app/components/layout/admin.header';
// import AdminSideBar from '@/app/components/layout/admin.sidebar';
// import { AdminContextProvider } from '@/libs/admin.context';

// const AdminLayout = ({
//     children,
// }: Readonly<{
//     children: React.ReactNode;
// }>) => {

//     return (
//         <AdminContextProvider>
//             <div style={{ display: "flex" }}>
//                 <div className='left-side' style={{ minWidth: 80 }}>
//                     <AdminSideBar />
//                 </div>
//                 <div className='right-side' style={{ flex: 1 }}>
//                     <AdminHeader />
//                     <AdminContent>
//                         {children}
//                     </AdminContent>
//                     <AdminFooter />
//                 </div>
//             </div>
//         </AdminContextProvider>
//     )
// }

// export default AdminLayout