import type { ModalProps } from "@/types/modal.type";

const Modal = ({ isOpen, children }: ModalProps) => {
  return (
    isOpen && (
      <div className=" w-full h-full fixed flex items-center justify-center z-50 p-5 bg-black/35">
        <div className="animate-[bounce-in-top_0.4s_ease-out_both] w-120 max-w-full max-h-[88vh] overflow-y-auto bg-paper border-[3px] border-solid border-graphite rounded-[20px] pt-6.5 px-7 pb-6 filter-[url(#wobble)] [box-shadow:6px_6px_0_rgba(51,49,46,0.35)] relative">
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
