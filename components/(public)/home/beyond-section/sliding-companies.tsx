"use client";
// builtin

// external

// internal
import Div from "@/components/ui/div";
import type { Company, CompanyLoop } from "@/lib/types/main-page";

interface SlidingCompaniesProps {
	companies: Company[];
}

export default function SlidingCompanies({ companies }: SlidingCompaniesProps) {
	const loopCompanies: CompanyLoop[] = [
		...companies.map((company) => ({ ...company, index: 0 })),
		...companies.map((company) => ({ ...company, index: 1 })),
	];

	return (
		<Div className="flex items-center gap-x-8 w-max pl-8" animationScheme="infiniteSlide">
			{loopCompanies.map((company) => (
				<div
					key={`${company.name}-${company.index}`}
					className="flex flex-col items-center justify-center rounded-xl bg-white/5 p-5"
				>
					<img
						src={company.logo}
						alt={`${company.name} logo`}
						className="mb-3 h-12 min-w-16 object-contain md:h-16"
						loading="lazy"
					/>
				</div>
			))}
		</Div>
	);
}
