import { Link, useLocation } from "react-router";
import {
	ChipDirective,
	ChipsDirective,
	ChipListComponent,
} from "@syncfusion/ej2-react-buttons";
import { getFirstWord } from "lib/utils";
import { cn } from "~/lib/utils";

export const TripCard = ({
	id,
	imageUrl,
	location,
	name,
	price,
	tags,
}: TripCardProps) => {
	const path = useLocation();
	const sendToTravel =
		path.pathname === "/" || path.pathname.startsWith("/travel");

	return (
		<Link
			to={sendToTravel ? `/travel/${id}` : `/trips/${id}`}
			className="trip-card"
			draggable={false}
		>
			<img src={imageUrl} alt={name} draggable={false} />

			<article>
				<h2>{name}</h2>
				<figure>
					<img
						src="/assets/icons/location-mark.svg"
						alt="location"
						className="size-4"
					/>
					<figcaption>{location}</figcaption>
				</figure>
			</article>

			<div className="mt-5 pl-[18px] pr-3.5 pb-5">
				<ChipListComponent id="travel-chip">
					<ChipsDirective>
						{tags.map((tag, index) => (
							<ChipDirective
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
								text={getFirstWord(tag)}
								cssClass={cn(
									index === 1
										? "!bg-pink-50 !text-pink-500"
										: "!bg-success-50 !text-success-700",
								)}
							/>
						))}
					</ChipsDirective>
				</ChipListComponent>
			</div>

			<article className="tripCard-pill">{price}</article>
		</Link>
	);
};
