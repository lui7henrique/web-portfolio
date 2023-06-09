import Image from "next/image";

export const WorkSection = () => {
  return (
    <section className="py-20 border-b">
      <h3 className="text-3xl font-bold text-zinc-900">Work</h3>

      <p className="text-md font-regular text-zinc-500 mt-4">
        As of this moment, I&apos;m building projects at{" "}
        <a
          href="https://www.linkedin.com/company/hyperlocalholding/"
          className="underline"
          target="_blank"
        >
          Hyperlocal
        </a>
        . I have limited availability for freelance work but I&apos;m always
        excited for new ideas and projects! You can{" "}
        <a href="mailto:7henrique18@gmail.com" className="underline">
          shoot me an email
        </a>{" "}
        or hit up on{" "}
        <a
          href="https://twitter.com/lui7henrique"
          target="_blank"
          className="underline"
        >
          Twitter
        </a>{" "}
        or{" "}
        <a
          href="https://www.linkedin.com/in/luiz-henrique7/"
          target="_blank"
          className="underline"
        >
          LinkedIn!
        </a>
      </p>

      <section className="mt-8 flex-col gap-4 grid grid-cols-3">
        <div className="col-span-2 rounded-3xl bg-blue-700 flex flex-col justify-between p-8">
          <figure className="rounded-xl overflow-hidden w-16 h-16 relative">
            <Image src="/logos/hyperlocal.jpg" fill alt="hyperlocal-logo" />
          </figure>

          <div className="mt-20">
            <h5 className="text-zinc-50 font-regular text-md">Hyperlocal</h5>

            <h5 className="text-zinc-50 font-semibold text-3xl mb-4">
              Front-end developer
            </h5>

            <sup className="text-zinc-50 text-xs ">Nov 2022 - Present</sup>
          </div>
        </div>

        <div className="col-span-1 rounded-3xl bg-zinc-900 flex flex-col justify-between p-8">
          <figure className="rounded-xl overflow-hidden w-16 h-16 relative">
            <Image src="/logos/hubxp.svg" fill alt="hubxp-logo" />
          </figure>

          <div className="mt-20">
            <h5 className="text-zinc-50 font-regular text-md">hubxp</h5>

            <h5 className="text-zinc-50 font-semibold text-3xl mb-4">
              Front-end developer
            </h5>

            <sup className="text-zinc-50 text-xs ">Set 2021 - Nov 2022</sup>
          </div>
        </div>
      </section>
    </section>
  );
};
