import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { useRouter } from "next/router";

import StarkLogo from "@/public/starkQuizzLogo.png";
import Image from "next/image";

import styles from "./header.module.css";
import ConnectWallet from "./ConnectWallet";

function Header({ mutateQuizz, mutateMyQuizz }) {
  const router = useRouter();

  return (
    <AppBar position="static" style={{ backgroundColor: "white" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters className={styles.toolbar}>
          <Image
            src={StarkLogo}
            width={200}
            height={50}
            priority
            onClick={() => router.push("/")}
            alt={"starkQuizz-logo"}
            style={{ cursor: "pointer" }}
          />
          <ConnectWallet
            mutateQuizz={mutateQuizz}
            mutateMyQuizz={mutateMyQuizz}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
