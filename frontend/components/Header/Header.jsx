import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

import StarkLogo from "@/public/starkQuizzLogo.png";
import Image from "next/image";

import ConnectWallet from "./ConnectWallet";

const pages = ["My Quizzes", "All Quizzes"];

function ResponsiveAppBar() {
  const router = useRouter();

  return (
    <AppBar position="static" style={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ height: "10vh" }}>
          <Image
            src={StarkLogo}
            width={200}
            height={50}
            priority
            onClick={() => router.push("/")}
            alt={"starkQuizz-logo"}
            style={{ cursor: "pointer" }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  marginRight: "20px",
                  color: "black",
                  display: "block",
                  fontSize: "18px",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <ConnectWallet />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
