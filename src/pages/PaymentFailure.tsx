import RContainer from "@/components/layout/RContainer";
import RButtonSmall from "@/components/ui/RButtonSmall";

const PaymentFailure = () => {
  return (
    <RContainer>
      <div className="text-center md:py-24 py-16 lg:w-[850px] mx-auto">
        <h1 className="lg:text-5xl text-3xl font-semibold mb-8">
          Payment Failed 😕
        </h1>
        <p className="mb-5">
          Unfortunately, something went wrong with your payment, and we couldn't
          process your booking. Please double-check your payment details and try
          again. If the issue persists, feel free to contact our support team
          for assistance. We're here to help you get back on track!
        </p>
        <RButtonSmall link={`/dashboard/user/bikes`}>
          All Bikes
        </RButtonSmall>
      </div>
    </RContainer>
  );
};

export default PaymentFailure;
