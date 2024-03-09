"use client";
import { useStoreModal } from "@/hooks/use-store-modal";

const DashboardPage = () => {
  const storeModal = useStoreModal();
  return (
    <div>
      this is a dashboard page
      <button
        onClick={() => {
          storeModal.onOpen();
        }}
      >
        yo
      </button>
    </div>
  );
};

export default DashboardPage;
