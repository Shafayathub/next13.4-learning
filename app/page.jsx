import React from 'react';
import Feed from '@components/Feed';

const home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & share
        <br className="min-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc">
        It is a web based tool to discover, create & share AI Prompts.
      </p>
      {/* feed */}
      <Feed />
    </section>
  );
};

export default home;
