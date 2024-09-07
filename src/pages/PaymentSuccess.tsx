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
          Thank you for completing your payment! We’ve successfully processed
          your final payment for the bike rental. We hope you had an amazing
          experience riding with us. If you need any further assistance or have
          any feedback, feel free to reach out to us. We look forward to serving
          you again on your next adventure!
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
