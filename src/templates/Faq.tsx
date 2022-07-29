/* This example requires Tailwind CSS v2.0+ */
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/outline'

const features = [
  {
    name: 'Resident Experience',
    description: 'An experience designed to optimize shared laundry rooms and efficiently move residents through an already unpleasant chore.',
    icon: CheckIcon,
  },
  {
    name: "Liberating your onsite team's time",
    description: 'With real-time support residents contact Tumble directly taking the burden off of onsite teams.',
    icon: ClockIcon,
  },
  {
    name: 'Property NOI',
    description: 'Increase property NOI by converting more prospective renters, reducing burden on onsite teams, and increasing retention.',
    icon: CurrencyDollarIcon,
  },
]

export default function Example() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-24">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Why you need Tumble Smart Laundry
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-tmbl-drk">
          Tumble invented Smart Laundry for residents and onsite teams. <br></br>This isn't your grandparents laundry company!
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-tmbl-drk p-3 shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                    <p className="mt-5 text-base text-tmbl-drk">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
