import Modal from "./_components/Modal";
import ModalTrigger from "./_components/ModalTrigger";

const Page = () => {
    return (
        <section className="mx-5 mb-4 mt-6">
            <ModalTrigger modalId="my_modal_3" className="w-full px-3 py-2 border border-gray-300 text-sm text-gray-600 rounded">
                Make a post...
            </ModalTrigger>
            <Modal id="my_modal_3">
                <h3 className="font-bold text-lg mb-3 text-gray-700">Buat Postingan!</h3>
                <textarea className="textarea h-24 w-full focus:outline-none focus:ring-0 mb-3" placeholder="Apa yang anda pikirkan, Fura?"></textarea>
                <button className="btn btn-outline w-full border border-gray-300 text-gray-700">Kirim!</button>
            </Modal>
        </section>
    );
};

export default Page;
