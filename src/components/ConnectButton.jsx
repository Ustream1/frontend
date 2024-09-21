import { ConnectButton } from "@rainbow-me/rainbowkit";
import MetamaskIcon from "../assets/images/metamask_icon.png";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
const CustomConnectButton = ({ title, onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="flex p-[10px] items-center justify-center h-[48px] w-[280px]  rounded-[8px] hover:bg-slate-300  bg-white"
    >
      <p className="text-black font-normal text-base">{title}</p>
    </Button>
  );
};

export const ConnectToWalletButton = () => {
  const { setAuthenticated } = useAuth();
  const navigate = useNavigate();
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (connected) {
                navigate("/app/movies");
              }
              if (!connected) {
                return (
                  <div className="flex flex-col gap-4 w-full max-w-[450px]">
                    <button
                      onClick={openConnectModal}
                      className="w-full border border-deep_blue px-4 py-[12px] rounded-md text-deep_blue flex items-center justify-center gap-2"
                    >
                      <img src={MetamaskIcon} alt="" />
                      <p>Continue with Metamask</p>
                    </button>
                  </div>
                );
              }
              if (chain.unsupported) {
                return (
                  <Button
                    onClick={openChainModal}
                    className="flex p-[10px] items-center justify-center h-[48px] w-[280px]  rounded-[8px] hover:bg-slate-300  bg-white"
                  >
                    <p className="text-black font-normal text-base">
                      {" "}
                      Wrong network
                    </p>
                  </Button>
                );
              }
              return (
                <div
                  className="flex p-[10px] items-center h-[48px] w-[280px] gap-[10px] rounded-[8px] border-[1px] bg-transparent border-white"
                  style={{ display: "flex", gap: 12 }}
                >
                  <button
                    onClick={openChainModal}
                    style={{ display: "flex", alignItems: "center" }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          color: "#FFFFFF",
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>
                  <button
                    className="text-white"
                    onClick={openAccountModal}
                    type="button"
                  >
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
export default ConnectToWalletButton;
