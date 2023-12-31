import Link from "next/link";

const PrimaryButton = ({ title, children, href }) => {
  return (
    <Link title={title} href={href}>
      <div
        style={{
          backgroundImage:
            "radial-gradient(100% 1338.07% at 4.85% 0%, #8B74F6 0%, #B4E5DC 100%)",
          backgroundSize: "200% 200%",
          animation: "gradient 5s ease-out infinite",
        }}
        className="p-[2px] rounded-lg shadow-md relative"
      >
        {/* Overlay */}
        <div className="absolute rounded-md inset-0 m-[2px] bg-primaryBlack/20" />
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center w-full gap-2 px-12 py-3 text-white transition-colors duration-100 ease-out rounded-lg hover:bg-primaryBlack/30 bg-primaryBlack/80 backdrop-blur-md">
          <span>{title}</span>
          <span>{children}</span>
        </div>
      </div>
    </Link>
  );
};

export default PrimaryButton;
