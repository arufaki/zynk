"use client";

const ModalTrigger = ({ modalId, children, className }) => {
    const handleOpen = () => {
        document.getElementById(modalId)?.showModal();
    };
    return (
        <div className={className} onClick={handleOpen}>
            {children}
        </div>
    );
};

export default ModalTrigger;
