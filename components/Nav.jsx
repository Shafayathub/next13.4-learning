'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const isUserLoggedIn = true;

  const [providers, setProviders] = useState(null);
  const [toggleDropDowon, setToggleDropDowon] = useState(false);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setProviders();
  }, []);
  return (
    <nav className="w-full mb-16 pt-3 flex-between">
      <Link href={'/'} className="flex flex-center gap-2">
        <Image
          src={'/assets/images/logo.svg'}
          alt="Shafayat"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href={'/create-prompt'} className="black_btn">
              create post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              sign out
            </button>
            <Link href={'/profile'}>
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                alt="profile"
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn">
                  sign in
                </button>
              ))}
          </>
        )}
      </div>

      {/* mobile navigation */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.svg"
              width={37}
              height={37}
              alt="profile"
              className="rounded-full"
              onClick={() => setToggleDropDowon((prev) => !prev)}
            />
            {toggleDropDowon && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropDowon(false)}>
                  My Profile
                </Link>
                <Link
                  href="/create-propmt"
                  className="dropdown_link"
                  onClick={() => setToggleDropDowon(false)}>
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropDowon(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn">
                  sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn">
                  sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
