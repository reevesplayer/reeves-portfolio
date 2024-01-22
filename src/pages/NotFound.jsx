import React, { useEffect } from 'react'
import backgroundDark from "../components/background-dark.png";
import backgroundLight from "../components/background-light.png";
import useDarkMode from "use-dark-mode";
import { Link, Button, Image } from "@nextui-org/react"
import errorImg from "../components/404.png";

const NotFound = () => {

    const darkMode = useDarkMode(false);
    const backgroundImage = darkMode.value ? backgroundDark : backgroundLight;

    useEffect(() => {
        document.body.classList.add('overflow-hidden');
    
        return () => {
          document.body.classList.remove('overflow-hidden');
        };
      }, []);

  return (

    <div
      className="flex justify-center pt-14"
      style={{
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
        <div className="flex flex-col items-center justify-center h-screen space-y-6">
            <Image
                src={errorImg}
                alt="404 Not Found"
                width={400}
                height={300}
            />
            <h1 className="text-4xl font-bold text-primary">Oops! Page not found...</h1>
            <p className="text-primary">Looks like you took a wrong turn. Let's get you back on track!</p>
            <Link href="/">
                <Button color="primary">
                    Go Home
                </Button>
            </Link>
        </div>

    </div>
  )
}

export default NotFound
