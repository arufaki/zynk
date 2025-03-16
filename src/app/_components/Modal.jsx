const Modal = ({ id, children }) => {
    return (
        <dialog id={id} className="modal">
            <div className="modal-box max-w-lg">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-4 bg-gray-50">✕</button>
                </form>
                {children}
            </div>
        </dialog>
    );
};

export default Modal;
