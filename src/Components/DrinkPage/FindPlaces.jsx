import React from "react";
import { Autocomplete, AutocompleteItem, Button } from "@heroui/react";
import { DatePicker } from "@heroui/react";
import { now, parseAbsoluteToLocal } from "@internationalized/date";

function FindPlaces() {
  let [date, setDate] = React.useState(
    parseAbsoluteToLocal("2021-04-07T18:45:22Z")
  );

  return (
    <section className="mx-auto my-8 lg:my-16">
      <div className="container bg-[#FBFCFF] w-full h-auto lg:w-[90%] lg:h-[150px] px-5 lg:px-10 lg:ms-10 rounded-xl">
      <h2 className="text-2xl md:text-3xl font-bold text-[#26395C] mb-8">Find the best places to eat and drink for any occasion</h2> 

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
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
            <DatePicker
              labelPlacement="outside"
              className="max-w-[284px]"
              label="Date"
            />
        
          </div>
          <div>
            <DatePicker
              className="max-w-md"
              granularity="minute"
              hourCycle="12"
              hideTimeZone = "false"

              label="Time"
              labelPlacement="outside"
              value={date}
              onChange={setDate}
            />
          </div>
          <div>
            <Autocomplete
              labelPlacement="outside"
              label="Cuisine"
              placeholder="CuisineChinese"
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
              label="People"
              placeholder="2"
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
    </section>
  );
}

export default FindPlaces;
