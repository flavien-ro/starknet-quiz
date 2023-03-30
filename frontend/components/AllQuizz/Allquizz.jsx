import React, { useState, useEffect } from "react";
import DisplayQuizzes from "./DisplayQuizzes";

import Loader from "@/utils/Loader";
import { useAccount, useConnectors } from "@starknet-react/core";
import { getAddress, loginUser } from "@/requests/useMe";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BraavosIcon from "@/public/braavos-icon.svg";
import ArgentIcon from "@/public/argent-icon.svg";
import Container from "@mui/system/Container";
import Image from "next/image";

const Allquizz = ({ data, isLoading, mutateQuizz }) => {
  const { address } = useAccount();

  const { connectors, connect } = useConnectors();
  const { mutateAddress } = getAddress();

  useEffect(() => {
    if (address) {
      const login = async () => {
        await loginUser(address);
        mutateAddress();
        mutateQuizz();
      };
      login();
    }
  }, [address]);

  const connectAccount = (connector) => {
    connect(connector);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {data ? (
            <DisplayQuizzes allQuizz={data} />
          ) : (
            <Container
              maxWidth="lg"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                marginTop: "50px",
              }}
            >
              <Typography
                variant="h1"
                style={{
                  textAlign: "center",
                  fontSize: "35px",
                  marginBottom: "35px",
                }}
              >
                Connect your wallet to access to our quizzes
              </Typography>
              {connectors.map((connector) => {
                return (
                  <Button
                    variant="outlined"
                    key={connector.id()}
                    onClick={() => connectAccount(connector)}
                    style={{ width: "300px", marginBottom: "20px" }}
                  >
                    <Image
                      src={
                        connector.id() === "argentX" ? ArgentIcon : BraavosIcon
                      }
                      width={30}
                      height={30}
                      alt={connector.id()}
                      style={{ marginRight: "10px" }}
                    />
                    Connect {connector.id()}
                  </Button>
                );
              })}
            </Container>
          )}
        </div>
      )}
    </>
  );
};

export default Allquizz;
