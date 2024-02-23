import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
    --nucbaBlack:#242424;
    --nucbaBlacker:#18191a;
    --nucbaBlackReduced:#363636;
    --nucbaOrange:#ff9300;
    --nucbaTransparentOrange:#ff93007e;
    --nucbaRose:#ff205e;
    --nucbaTransparentRose:#ff205e6e;
    --nucbaYellow:#FFE74C;
    --nucbaTransparentYellow:#ffe74c2e;
    --nucbaBlue:#8093F1;
    --nucbaBlue2:rgb(47 75 217);
    --nucbaRedYellowGradient: linear-gradient(170deg, rgba(255,32,110,1) 0%, rgba(255,231,76,1) 100%);
    --nucbaRedBlueGradient: linear-gradient(10deg, rgba(255,32,110,1) 0%, rgba(85,108,223,1) 100%);
    --nucbaRedBlackGradient:linear-gradient(180deg, rgba(36,36,36,1) 0%, rgba(255,32,110,1) 100%);
    --nucbaBlueBlackGradient:linear-gradient(170deg, rgba(36,36,36,1) 0%, rgba(85,108,223,1) 100%);
    --nucbaBlueBlackGradientReversed: linear-gradient(180deg, rgba(36,36,36,1) 0%, rgb(47 75 217) 110%);
    --nucbaRedBlackGradientReversed:linear-gradient(0deg, rgba(36,36,36,1) 0%, rgba(255,32,110,1) 120%);


}

html{
    scroll-behavior:smooth;


}
body{
    margin:0;
    padding:0;
    background-color:var(--nucbaBlack);
    font-family:'Montserrat', sans-serif;
    color:white;
    -webkit-tap-highlight-color:transparent;
    overflow-x:hidden;

}
a{
    text-decoration:none;
    color:white;
}

a:visited{
    color:white;
}

li{
    list-style:none;
}



`;
