import RContainer from "@/components/layout/RContainer";
import RButtonSmall from "@/components/ui/RButtonSmall";
import { useParams } from "react-router-dom";

const PaymentSuccess = () => {
  const { transactionId } = useParams();
  return (
    <RContainer>
      <div className="text-center md:py-24 py-16 lg:w-[850px] mx-auto">
        <h1 className="lg:text-5xl text-3xl font-semibold mb-8">
          🎉 Payment Successful! 🎉
        </h1>
        <p className="mb-5">
          Your payment has been processed successfully, and your booking is now
          confirmed! We’re thrilled to have you on board and can’t wait for you
          to start your adventure. Check your email for the confirmation
          details, and feel free to reach out if you have any questions. Happy
          riding! 🚴‍♂️
        </p>
        <p className="mb-8">Transaction ID: {transactionId}</p>
        <RButtonSmall link={`/dashboard/user/my-rentals`}>
          My Rentals
        </RButtonSmall>
      </div>
    </RContainer>
  );
};

export default PaymentSuccess;
