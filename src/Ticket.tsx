import { Form, Formik } from "formik";
import { DateTime } from "luxon";
import { FC, useEffect } from "react";
import { useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import {
  TextField,
  Checkbox,
  StackedCards,
  FullbarButton,
} from "./FormComponents";
import Loading from "./Loading";
import Logo from "./logo.png";

const Ticket: FC = () => {
  const navigate = useNavigate();
  const { ticketid } = useParams();
  useEffect(() => {
    if (ticketid === "notfound") {
      window.location.href = "https://statechange.ai";
    }
  }, [ticketid]);
  const url = `https://xw8v-tcfi-85ay.n7.xano.io/api:xFY-pmmG/ohoffer/${ticketid}`;
  const { data, isFetched, error } = useQuery<{
    email: string;
    name?: string;
    dates: { id: string; starts_at: number; name: string }[];
  }>({
    queryKey: "ticket",
    queryFn: async () => {
      const response = await fetch(url);
      if (response.status !== 200) throw new Error(response.statusText);
      return response.json();
    },
    refetchOnWindowFocus: false,
    staleTime: 0,
    cacheTime: 0,
    retry: false,
    enabled: ticketid !== "notfound",
  });
  // console.log("Data is ", data);
  const options = data?.dates.map(({ id, starts_at, name }) => ({
    value: id.toString(),
    subTitle: DateTime.fromMillis(starts_at).toLocaleString(
      DateTime.DATETIME_HUGE
    ),
    title: name,
  }));
  useEffect(() => {
    if (error) {
      console.log("Showing an error");
      navigate("/");
    }
  }, [error, navigate]);
  // if (!isFetched) return <Loading />;
  // if (!options) return null;
  return (
    <div className="h-screen w-screen bg-gray-800">
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="sm:w-1/2 bg-white p-6 shadow-lg rounded-lg">
          {!isFetched && !error && <Loading />}
          {isFetched && !!options && (
            <Formik
              initialValues={{
                event_id: options[0].value,
                email: data?.email,
                name: data?.name,
                agreedToTerms: false,
              }}
              onSubmit={async (values, form) => {
                // console.log("I would submit", values);
                await fetch(url, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values),
                });
                navigate("/thankyou");
              }}
              validate={(values) => {
                const errors: Record<string, string> = {};
                if (!values.email) errors.email = "Email is required";
                if (!values.agreedToTerms)
                  errors.agreedToTerms =
                    "You must agree to the terms to reserve your slot";
                // else console.log("values.agreedToTerms", values.agreedToTerms);
                // console.log(errors, values);
                return errors;
              }}
              validateOnMount
            >
              {() => (
                <Form id="create-oracle-form" className="flex flex-col gap-4">
                  <div className="flex flex-col justify-around items-center ">
                    <h1 className="flex font-bold text-xl">
                      <img src={Logo} className="h-8 w-8 mr-2" alt="" />
                      State Change Pro Office Hours
                    </h1>
                    <p>Ticket to paricipate in one complimentary session</p>
                  </div>

                  <TextField title="Name" name="name" />

                  <TextField title="Email Address" name="email" />

                  <StackedCards
                    options={options}
                    name="event_id"
                    title="Time Slot"
                  />

                  <Checkbox
                    name="agreedToTerms"
                    title="I agree to the office hours guest policy of State Change Pro"
                    subTitle="tl;dr Office Hours are recorded and distributed at the discretion of State Change Pro Management, and we reserve the right to remove disruptive participants from the call."
                  />

                  {/* <SubmitGroup> */}
                  <FullbarButton title="Reserve my place" />
                  {/* </SubmitGroup> */}
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </div>
  );
};
export default Ticket;
