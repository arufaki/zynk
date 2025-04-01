import Header from "app/_components/Header";
import React from "react";

const AuthenticatedLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
};

export default AuthenticatedLayout;
