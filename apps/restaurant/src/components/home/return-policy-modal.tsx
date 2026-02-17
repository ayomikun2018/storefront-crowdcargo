import ModalWrapper, {
  BaseModalProps,
} from "@/components/elements/modal-wrapper";
import { Badge, DialogClose, XCircleIcon } from "@repo/ui";
import { FC } from "react";

const ReturnPolicyModal: FC<BaseModalProps> = ({ trigger }) => {
  return (
    <ModalWrapper
      trigger={trigger}
      className="md:max-w-5xl h-[90vh] overflow-hidden py-1"
      hideTitle
      hideCloseButton
    >
      {/* Header */}
      <div className="relative rounded-t-lg bg-gradient-to-r from-blue-700 via-60% to-blue-500 text-white">
        <div className="px-4 py-6 flex justify-between items-center bg-[url(/assets/return-policy-illustration.svg)] bg-no-repeat bg-right">
          <div className="space-y-3">
            <Badge className="bg-white/20 text-white">
              Last Updated: 3 days ago
            </Badge>
            <h2 className="text-2xl font-semibold">Return Policy</h2>
          </div>

          <DialogClose className="bg-white/10 p-2 rounded-full">
            <XCircleIcon className="size-6" />
          </DialogClose>
        </div>
      </div>

      {/* Content */}
      <div className="h-full">
        <iframe
          src="https://docs.google.com/document/d/1GMId5FFGcojXoerdzOMKOiKMrCkfTk3x/edit"
          className="w-full h-full border-none"
        />
      </div>
    </ModalWrapper>
  );
};

export default ReturnPolicyModal;
