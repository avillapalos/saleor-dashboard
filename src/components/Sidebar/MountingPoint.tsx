import arrowBackIcon from "@assets/images/arrow-left.svg";
import { useLegacyThemeHandler } from "@dashboard/components/Sidebar/user/Controls";
import Avatar from "@dashboard/components/TableCellAvatar/Avatar";
import { makeStyles } from "@saleor/macaw-ui";
import { Box } from "@saleor/macaw-ui-next";
import React from "react";

const darkLogo =
  process.env.TENANT_LOGO_URL_DARK ||
  "https://comerciame.cdn.prismic.io/comerciame/Zk8RECol0Zci9Yfm_comerciame-logo-blanco.svg?auto=compress,format";

const lightLogo =
  process.env.TENANT_LOGO_URL_LIGHT ||
  "https://comerciame.cdn.prismic.io/comerciame/Zk8RDyol0Zci9Yfl_comerciame-logo-simple.svg?auto=compress,format";

const useStyles = makeStyles(
  theme => ({
    logo: {
      display: "block",
      width: 200,
      marginTop: theme.spacing(2),
    },
    arrowButton: {
      marginRight: theme.spacing(2),
    },
  }),
  { name: "MountingPoint" },
);

export const MountingPoint: React.FC = props => {
  const classes = useStyles(props);
  const { theme } = useLegacyThemeHandler();
  const logo = theme === "defaultLight" ? lightLogo : darkLogo;

  return (
    <Box display="flex" gap={2} paddingX={4} paddingY={2} alignItems="center">
      <a href={"/welcome"}>
        <Avatar thumbnail={arrowBackIcon} />
      </a>

      <img className={classes.logo} src={logo} alt="Logo" />
    </Box>
  );
};

export default MountingPoint;
