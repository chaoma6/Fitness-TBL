import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">Empowering you to reach your fitness goals</p>
          <p>© Evogym 2023 All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Facebook</p>
          <p className="my-5">Instagram</p>
          <p>Fitocracy</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">456 Main Road, Gosford NSW 2250</p>
          <p>+61 2 9876 5432</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
