import { toast } from "sonner";

const handleMutation = async (
  data: any,
  mutationFunc: any,
  loadingTxt: string,
  onSuccess?: unknown,
  onFailure?: unknown
) => {
  const loadingToast = toast.loading(loadingTxt);
  try {
    const res = await mutationFunc(data).unwrap();
    console.log("res, ", res);
    toast.success(res?.message || "Success!", { id: loadingToast });
    if (res?.success) {
      if (typeof onSuccess === "function") {
        onSuccess(res);
      }
    } else {
      if (typeof onFailure === "function") {
        onFailure(res);
      }
    }
  } catch (error: any) {
    toast.error(error?.data?.message || "Something went wrong!", {
      id: loadingToast,
    });
    console.log("error, ", error);
  }
};

export default handleMutation;
