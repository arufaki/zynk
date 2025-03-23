import AuthHeader from "app/_components/Authentication/AuthHeader";
import "../globals.css";

const AuthLayout = ({ children }) => {
    return (
        <main>
            <section className="bg-gray-600">
                <div className="min-h-screen">
                    <AuthHeader />
                    <div className="bg-white rounded-t-[60px]">{children}</div>
                </div>
            </section>
        </main>
    );
};

export default AuthLayout;
