import CardInfo from "@/components/CardInfo";

function page() {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex justify-between m-5 items-center ">
        <h1 className="max-md:text-4xl">
          <span className="text-yellow-400">Hi</span>, Athul !
        </h1>

        <div className="text-xl max-md:hidden ">10:30:12 AM </div>
      </div>

      <div className="flex gap-5 flex-wrap w-full justify-center">
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <CardInfo title="Add" />
      </div>
    </div>
  );
}

export default page;
