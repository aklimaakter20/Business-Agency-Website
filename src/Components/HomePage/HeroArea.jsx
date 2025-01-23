import React from "react";
import { Autocomplete, AutocompleteItem, Button } from "@heroui/react";

const HeroArea = () => {
  return (
    <section className="bg-[url('hero.png')] w-full bg-no-repeat bg-cover h-[140vh] mx-auto -mt-44 mb-10">
      
      <div className="container w-[80%] mt-10 mx-auto">
        <h1 className="text-2xl text-center lg:text-start w-full lg:text-5xl lg:w-[65%] font-bold py-10 px-10 mt-24 text-white leading-tight">
          Find amazing things to do anytime, anywhere in Lagos.
        </h1>

        <div className="bg-[#FBFCFF] w-full h-auto lg:w-[750px] lg:h-[150px] px-5 py-5 lg:py-10 lg:px-10 lg:ms-10 rounded-xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div>
              <Autocomplete
                labelPlacement="outside"
                label="Location"
                placeholder="Oshodi"
                className="w-[100%]"
              >
                <AutocompleteItem value="Hablu programmer">
                  Oshodi
                </AutocompleteItem>

                <AutocompleteItem value="Hablu programmer">
                  Hablu Programmer
                </AutocompleteItem>
                <AutocompleteItem value="Stack Learner">
                  Stack Learner
                </AutocompleteItem>
              </Autocomplete>
            </div>
            <div>
              <Autocomplete
                labelPlacement="outside"
                label="Date"
                placeholder="Date"
                className="w-[100%]"
              >
                <AutocompleteItem value="Hablu programmer">
                  Oshodi
                </AutocompleteItem>

                <AutocompleteItem value="Hablu programmer">
                  Hablu Programmer
                </AutocompleteItem>
                <AutocompleteItem value="Stack Learner">
                  Stack Learner
                </AutocompleteItem>
              </Autocomplete>
            </div>
            <div>
              <Autocomplete
                labelPlacement="outside"
                label="Activities"
                placeholder="Night Clubs"
                className="w-[100%]"
              >
                <AutocompleteItem value="Hablu programmer">
                  Oshodi
                </AutocompleteItem>

                <AutocompleteItem value="Hablu programmer">
                  Hablu Programmer
                </AutocompleteItem>
                <AutocompleteItem value="Stack Learner">
                  Stack Learner
                </AutocompleteItem>
              </Autocomplete>
            </div>
            <div>
              <Button color="primary" className="py-7 w-full mt-2">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroArea;
