import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
          >
            <img
              src={client.logo}
              alt="logo"
              className="sm:w-[192px] w-[100px] object-contain hover:animate-none animate-bounce sm:px-5 px-0 cursor-pointer"
              onClick={() => window.open(client.URL, "_blank")}
              //Open a new tab using _blank
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
