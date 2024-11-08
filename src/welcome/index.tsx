import shoppingIcon from "@assets/images/online-shopping-100.png";
import webIcon from "@assets/images/web-100.png";
import Layout from "@dashboard/auth/components/Layout";
import { Box, Button, Text } from "@saleor/macaw-ui-next";
import { useAuth } from "@saleor/sdk"; // Assuming useAuth hook is used for logout
import React from "react";
import { useHistory } from "react-router";

const SelectionPage = () => {
  const history = useHistory();
  const { logout } = useAuth();

  const handleSelect = (option: string) => {
    if (option === "tienda") {
      history.push("/");
    }
  };

  const handleLogout = async () => {
    await logout();
    history.push("/login"); // Redirect to the login page after logout
  };

  const cmsUrl = process.env.CMS_URL;

  return (
    <Layout>
      <Box display="flex" flexDirection="column" alignItems="center" gap={4}>
        <Box display="flex" justifyContent="center" gap={6} paddingY={8}>
          {cmsUrl && (
            <a href={cmsUrl} target={"_blank"} rel="noreferrer">
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                borderTopStyle="solid"
                borderBottomStyle="solid"
                borderLeftStyle="solid"
                borderRightStyle="solid"
                borderRadius={8}
                padding={6}
                width={52}
                height={52}
                cursor="pointer"
              >
                <img
                  src={webIcon} // Replace with your image URL
                  alt="Contenido de la web"
                  style={{ width: "100px", height: "100px", marginBottom: "20px" }}
                />
                <Text>
                  <strong>Contenido de la web</strong>
                </Text>
              </Box>
            </a>
          )}

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            borderTopStyle="solid"
            borderBottomStyle="solid"
            borderLeftStyle="solid"
            borderRightStyle="solid"
            borderRadius={8}
            padding={6}
            width={52}
            height={52}
            cursor="pointer"
            onClick={() => handleSelect("tienda")}
          >
            <img
              src={shoppingIcon} // Replace with your image URL
              alt="Gestionar Tienda"
              style={{ width: "100px", height: "100px", marginBottom: "20px" }}
            />
            <Text>
              <strong>Gestionar Tienda</strong>
            </Text>
          </Box>
        </Box>

        {/* Logout Button */}
        <Button variant="error" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </Layout>
  );
};

export default SelectionPage;
