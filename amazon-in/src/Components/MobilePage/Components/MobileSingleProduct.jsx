import {
	Box,
	Button,
	Center,
	Flex,
	Img,
	Stack,
	Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../../Homepage/Navbar/Navbar";
import styles from "../Styles/MobileSingleProduct.module.css";

const AllProducts = [
	{
		id: 1,
		title:
			"DISCOUNT PROMOS Custom Light Up Logo Phone Stands Set of 50, Personalized Bulk Pack - Essential Smartphone Accessory, Perfect for Office and Home - Red",
		brand: "DISCOUNT PROMOS",
		rating: 3,
		reviewsCount: 16,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/71T32m1w-9L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
		price: 1845,
	},
	{
		id: 55,
		title: "OnePlus 10T 5G (Jade Green, 8GB RAM, 128GB Storage)",
		brand: "Redmi",
		rating: 4,
		reviewsCount: 6868,
		category: "smartphones",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/71flXufDnbL._AC_UY436_FMwebp_QL65_.jpg",
		price: 24299,
	},
	{
		id: 2,
		title:
			"SanDisk 512GB Extreme microSDXC UHS-I Memory Card with Adapter - Up to 160MB/s, C10, U3, V30, 4K, A2, Micro SD - SDSQXA1-512G-GN6MA",
		brand: "SanDisk",
		rating: 5,
		reviewsCount: 966,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/61QkS94bG0L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
		price: 222,
	},
	{
		id: 3,
		title:
			"JBL Flip 4, Black - Waterproof, Portable & Durable Bluetooth Speaker - Up to 12 Hours of Wireless Streaming - Includes Noise-Cancelling Speakerphone, Voice Assistant & JBL Connect+",
		brand: "JBL",
		rating: 5,
		reviewsCount: 4337,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/61d5F64UDpL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
		price: 338,
	},
	{
		id: 4,
		title:
			"DJI OM 4 SE - 3-Axis Smartphone Gimbal Stabilizer with Tripod, Magnetic Design, Portable and Foldable, ActiveTrack 3.0, Story Mode, Vlogging Stabilizer, YouTube TikTok Video, for Android and iPhone",
		brand: "DJI",
		rating: 3,
		reviewsCount: 92626,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/61XzFY3sZRL.__AC_SX300_SY300_QL70_ML2_.jpg",
		price: 1632,
	},
	{
		id: 5,
		title:
			"SENNHEISER HD 450BT Bluetooth 5.0 Wireless Headphone with Active Noise Cancellation - 30-Hour Battery Life, USB-C Fast Charging, Virtual Assistant Button, Foldable - Black",
		brand: "Sennheiser Consumer Audio",
		rating: 3,
		reviewsCount: 88,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/71z97HfSZxS.__AC_SX300_SY300_QL70_FMwebp_.jpg",
		price: 1736,
	},
	{
		id: 6,
		title:
			"JBL CHARGE 5 - Portable Bluetooth Speaker with IP67 Waterproof and USB Charge out - Black",
		brand: "JBL",
		rating: 3,
		reviewsCount: 388,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/71Qp+U6qLJL._AC_SY300_SX300_.jpg",
		price: 802,
	},
	{
		id: 44,
		title:
			"Redmi 9A Sport (Coral Green, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery",
		brand: "Redmi",
		rating: 1,
		reviewsCount: 236,
		category: "smartphones",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/810KHyQ4WcL._AC_UY436_FMwebp_QL65_.jpg",
		price: 8999,
	},
	{
		id: 45,
		title:
			"OPPO A31 (Mystery Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
		brand: "oppo",
		rating: 5,
		reviewsCount: 785,
		category: "smartphones",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/71KCwNV6MuL._AC_UY436_FMwebp_QL65_.jpg",
		price: 49199,
	},
	{
		id: 7,
		title:
			"Status Between Pro True Wireless Earbuds w/Charging Case - Built-in 4 Microphones - Hybrid Triple Driver - 12 + 36 Hour Battery - Bluetooth 5.2 - Noise-Isolating Fit - Metal Exterior",
		brand: "Status",
		rating: 4,
		reviewsCount: 917,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/61FpcFsTg6L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
		price: 1988,
	},
	{
		id: 43,
		title: "OnePlus 10 Pro 5G (Volcanic Black, 8GB RAM, 128GB Storage)",
		brand: "Oneplus",
		rating: 2,
		reviewsCount: 7865,
		category: "smartphones",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/61mIUCd-37L._AC_UY436_FMwebp_QL65_.jpg",
		price: 95199,
	},
	{
		id: 8,
		title: "Apple AirPods Pro (Renewed)",
		brand: "Amazon Renewed",
		rating: 5,
		reviewsCount: 5597,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/71lj9Fdeq0L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
		price: 821,
	},
	{
		id: 9,
		title:
			"Bose QuietComfort Noise Cancelling Earbuds-Bluetooth Wireless Earphones, Triple Black",
		brand: "Bose",
		rating: 5,
		reviewsCount: 91,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/610DtEDib2L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
		price: 1264,
	},
	{
		id: 10,
		title:
			"Bose SoundLink Flex Bluetooth Portable Speaker, Wireless Waterproof Speaker for Outdoor Travel - Black",
		brand: "Bose",
		rating: 5,
		reviewsCount: 80,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/71we5E107KL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
		price: 864,
	},
	{
		id: 54,
		title:
			"Redmi A1 (Light Green, 2GB RAM 32GB ROM) | Segment Best AI Dual Cam | 5000mAh Battery | Leather Texture Design | Android 12",
		brand: "Redmi",
		rating: 4,
		reviewsCount: 8,
		category: "smartphones",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/81UmTnrBDSL._AC_UY436_FMwebp_QL65_.jpg",
		price: 46599,
	},
	{
		id: 11,
		title:
			"Google Pixel Buds Pro - Noise Canceling Earbuds - Up to 31 Hour Battery Life with Charging Case - Bluetooth Headphones - Compatible with Wireless Charging - Charcoal",
		brand: "Google",
		rating: 3,
		reviewsCount: 5628,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/61JWmBV95jL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
		price: 1450,
	},
	{
		id: 49,
		title:
			"Redmi 9A Sport (Carbon Black, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery",
		brand: "Redmi",
		rating: 2,
		reviewsCount: 76867,
		category: "smartphones",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/81T4O-rEI+L._AC_UY436_FMwebp_QL65_.jpg",
		price: 12999,
	},
	{
		id: 12,
		title:
			"SHOKZ OpenRun (AfterShokz Aeropex) - Open-Ear Bluetooth Bone Conduction Sport Headphones - Sweat Resistant Wireless Earphones for Workouts and Running - Built-in Mic, with Headband",
		brand: "SHOKZ",
		rating: 1,
		reviewsCount: 70433,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/51z-rf7XIjL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
		price: 1617,
	},
	{
		id: 13,
		title:
			"UGREEN 200W USB C Desktop Charger, Nexode 6 Ports GaN USB C Charging Station with 3.3FT USB C Cable Compatible with MacBook Pro, iPad Pro, iPhone 14 Pro Max/14 Plus, Galaxy S22, Steam Deck, Dell XPS",
		brand: "UGREEN",
		rating: 5,
		reviewsCount: 73,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/51CwCft1uFL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
		price: 3454,
	},
	{
		id: 14,
		title:
			"Cell Phone Signal Booster for Home Improve Voice and Data, Band 2/5/12/17 Boost 2G 3G 4G LTE 5G Signal for Verizon, AT&T and More Carriers, Cellular Repeater Amplifier Kits up to 5,500 Sq.Ft",
		brand: "Tonve",
		rating: 4,
		reviewsCount: 893,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/71N-mXtgrCL.__AC_SX300_SY300_QL70_ML2_.jpg",
		price: 95,
	},
	{
		id: 47,
		title:
			"Redmi 9 Activ (Carbon Black, 4GB RAM, 64GB Storage) | Octa-core Helio G35 | 5000 mAh Battery",
		brand: "Redmi",
		rating: 3,
		reviewsCount: 966,
		category: "smartphones",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/911TJ1CDbLL._AC_UY436_FMwebp_QL65_.jpg",
		price: 29699,
	},
	{
		id: 15,
		title:
			"Jabra Elite 7 Active in-Ear Bluetooth Earbuds - True Wireless Sports Ear Buds ShakeGrip for The Ultimate Active fit and Adjustable Active Noise Cancellation - Black",
		brand: "Jabra",
		rating: 4,
		reviewsCount: 2033,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/61XSbhejsWL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
		price: 1213,
	},
	{
		id: 16,
		title:
			"SHOKZ OpenRun Pro - Open-Ear Bluetooth Bone Conduction Sport Headphones - Sweat Resistant Wireless Earphones for Workouts and Running with Premium Deep Base - Built-in Mic, with Hair Band",
		brand: "SHOKZ",
		rating: 3,
		reviewsCount: 59923,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/5196E9KgDmL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
		price: 1004,
	},
	{
		id: 57,
		title:
			"Redmi 10A (Slate Grey, 4GB RAM, 64GB Storage) | 2 Ghz Octa Core Helio G25 | 5000 mAh Battery | Finger Print Sensor | Upto 5GB RAM with RAM Booster",
		brand: "Redmi",
		rating: 5,
		reviewsCount: 6786,
		category: "smartphones",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/71kVEmAMyEL._AC_UY436_FMwebp_QL65_.jpg",
		price: 35199,
	},
	{
		id: 17,
		title: "Apple AirPods (3rd Generation) (Renewed)",
		brand: "Amazon Renewed",
		rating: 2,
		reviewsCount: 64,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/61WnTqb1MrL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
		price: 877,
	},
	{
		id: 18,
		title:
			"Skullcandy Crusher Evo Wireless Over-Ear Bluetooth Headphones for iPhone and Android with Mic / 40 Hour Battery Life / Extra Bass Tech / Best for Music, School, Workouts, and Gaming - Black",
		brand: "Skullcandy",
		rating: 3,
		reviewsCount: 631,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/51IpO5fQ31L.__AC_SY300_SX300_QL70_FMwebp_.jpg",
		price: 1149,
	},
	{
		id: 46,
		title:
			"Redmi A1 (Light Blue, 2GB RAM, 32GB Storage) | Segment Best AI Dual Cam | 5000mAh Battery | Leather Texture Design | Android 12",
		brand: "Redmi",
		rating: 3,
		reviewsCount: 876,
		category: "smartphones",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/81UT07JsBqL._AC_UY436_FMwebp_QL65_.jpg",
		price: 50599,
	},
	{
		id: 19,
		title:
			"EINOVA Mundus Pro | UV-C Sterilizer Box Charging Station, two 10W Qi Wireless Fast Chargers, Intertek, EPA Certified | UV Sanitizer Kills Germs, Viruses, Bacteria - for iPhone, Airpods, Samsung Galaxy",
		brand: "EINOVA",
		rating: 1,
		reviewsCount: 3751,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/51r8wl1lENL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
		price: 68,
	},
	{
		id: 20,
		title:
			"Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear Headphones for Workouts and Running, Triple Black",
		brand: "Bose",
		rating: 3,
		reviewsCount: 79237,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/51P0D-ZgyVL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
		price: 1522,
	},
	{
		id: 21,
		title:
			"for iPhone 12 Pro Max Screen Replacement 6.7 Inch, Diykitpl 3D Touch LCD Digitizer Screen for A2342, A2412, A2411, A2410 with Repair Tools Kit+Magnetic Screw Mat+Screen Protector+Waterproof Seal",
		brand: "Diykitpl",
		rating: 1,
		reviewsCount: 46,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/718pj9A9OQL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
		price: 174,
	},
	{
		id: 22,
		title:
			"SanDisk 1TB Extreme microSDXC UHS-I Memory Card with Adapter - Up to 190MB/s, C10, U3, V30, 4K, 5K, A2, Micro SD Card- SDSQXAV-1T00-GN6MA",
		brand: "SanDisk",
		rating: 1,
		reviewsCount: 631,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/716kSUlHouL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
		price: 7865,
	},
	{
		id: 56,
		title:
			"Redmi Note 12 5G Mystique Blue 4GB RAM 128GB ROM | 1st Phone with 120Hz Super AMOLED and Snapdragon® 4 Gen 1 | 48MP AI Triple Camera",
		brand: "Redmi",
		rating: 4,
		reviewsCount: 6876,
		category: "smartphones",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/81E8fhm0dcL._AC_UY436_FMwebp_QL65_.jpg",
		price: 34299,
	},
	{
		id: 23,
		title:
			"SAMSUNG Galaxy Buds 2 Pro True Wireless Bluetooth Earbuds w/ Noise Cancelling, Hi-Fi Sound, 360 Audio, Comfort Ear Fit, HD Voice, Conversation Mode, IPX7 Water Resistant, US Version, Graphite",
		brand: "samsung",
		rating: 5,
		reviewsCount: 818,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/61Qqg+T8nsL._AC_SX300_SY300_.jpg",
		price: 1734,
	},
	{
		id: 24,
		title:
			"Beats Studio Buds - True Wireless Noise Cancelling Earbuds - Compatible with Apple & Android, Built-in Microphone, IPX4 Rating, Sweat Resistant Earphones, Class 1 Bluetooth Headphones - Black",
		brand: "Beats",
		rating: 4,
		reviewsCount: 45,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/51bRSWrEc7S.__AC_SY445_SX342_QL70_FMwebp_.jpg",
		price: 691,
	},
	{
		id: 25,
		title:
			"for iPhone 12 Pro Max Screen Replacement, FOOBONG Incell LCD Touch Glass Screen Repair A2342, A2410, A2411, A2412 Display Digitizer Frame Assembly with Full Repair Tools 6.7inch Black",
		brand: "FOOBONG",
		rating: 3,
		reviewsCount: 96354,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/71naavSxQRL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
		price: 163,
	},
	{
		id: 52,
		title:
			"OPPO A74 5G (Fluid Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
		brand: "oppo",
		rating: 1,
		reviewsCount: 678,
		category: "smartphones",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/71poFSdDs5S._AC_UY436_FMwebp_QL65_.jpg",
		price: 53199,
	},
	{
		id: 26,
		title: "Apple AirPods Pro - 1st Gen. (Renewed Premium)",
		brand: "Amazon Renewed",
		rating: 5,
		reviewsCount: 513,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/71bhWgQK-cL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
		price: 1737,
	},
	{
		id: 27,
		title:
			"Oladance Open Ear Headphones Bluetooth 5.2 Wireless Earbuds for Android & iPhone, Open Ear Earbuds with Dual 16.5mm Dynamic Drivers, Up To 16 Hours Playtime Waterproof Sport Earbuds -Interstellar Blue",
		brand: "Oladance",
		rating: 1,
		reviewsCount: 2967,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/51T1vDdI7SL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
		price: 174,
	},
	{
		id: 28,
		title:
			"Bose SoundLink Micro Bluetooth Speaker: Small Portable Waterproof Speaker with Microphone, Black",
		brand: "Bose",
		rating: 1,
		reviewsCount: 5,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/61v+-9dV4PL._AC_SY300_SX300_.jpg",
		price: 1737,
	},
	{
		id: 29,
		title:
			"Plantronics by Poly Voyager Legend Wireless Headset - Single-Ear Bluetooth w/Noise-Canceling Mic - Voice Controls - Mute & Volume Buttons -Ergonomic Design -Connect to Mobile/Tablet via Bluetooth -FFP",
		brand: "Poly (Plantronics + Polycom)",
		rating: 3,
		reviewsCount: 135,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/61XDRZ+3tIL._AC_SY300_SX300_.jpg",
		price: 691,
	},
	{
		id: 42,
		title:
			"Tecno Spark 9 (Infinity Black, 6GB RAM,128GB Storage) | 11GB Expandable RAM | Helio G37 Gaming Processor",
		brand: "tecno",
		rating: 5,
		reviewsCount: 8563,
		category: "smartphones",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/91c4uO7vK+L._AC_UY436_FMwebp_QL65_.jpg",
		price: 50399,
	},
	{
		id: 30,
		title:
			"Skullcandy Hesh ANC Wireless Over-Ear Noise Cancelling Bluetooth Headphones for iPhone and Android with Microphone / 22 Hour Battery Life / Best for Music, School, Workouts, Travel, and Gaming - White",
		brand: "Skullcandy",
		rating: 1,
		reviewsCount: 482,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/81qivz4aUEL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
		price: 495,
	},
	{
		id: 31,
		title:
			"Sony Noise Canceling Headphones WHCH710N: Wireless Bluetooth Over The Ear Headset with Mic for Phone-Call and Alexa Voice Control, Black",
		brand: "Sony",
		rating: 4,
		reviewsCount: 8757,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/51JnfYw9-tL.__AC_SX300_SY300_QL70_FMwebp_.jpg",

		price: 1068,
	},
	{
		id: 48,
		title:
			"realme narzo 50i (Mint Green, 2GB RAM+32GB Storage) Octa Core Processor | 6.5 inch Large Display",
		brand: "realme",
		rating: 2,
		reviewsCount: 676,
		category: "smartphones",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/81QqVNKWtML._AC_UY436_FMwebp_QL65_.jpg",
		price: 84299,
	},
	{
		id: 50,
		title:
			"Redmi A1 (Black, 2GB RAM, 32GB Storage) | Segment Best AI Dual Cam | 5000mAh Battery | Leather Texture Design | Android 12",
		brand: "Redmi",
		rating: 3,
		reviewsCount: 8678,
		category: "smartphones",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/81BxHYjeA2L._AC_UY436_FMwebp_QL65_.jpg",
		price: 75799,
	},
	{
		id: 32,
		title: "Fender Mustang Micro Headphone Amplifier",
		brand: "Fender",
		rating: 1,
		reviewsCount: 815,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/61FdyRvpzpL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
		price: 1395,
	},
	{
		id: 33,
		title:
			"SAMSUNG Galaxy Buds 2 True Wireless Earbuds Noise Cancelling Ambient Sound Bluetooth Lightweight Comfort Fit Touch Control US Version, Graphite",
		brand: "samsung",
		rating: 2,
		reviewsCount: 54,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/51O0iIuohnL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
		price: 1545,
	},
	{
		id: 34,
		title:
			"Gimbal Stabilizer for Smartphone, 3-Axis Phone Gimbal for Android and iPhone 14,13,12 PRO, Stabilizer for Video Recording with Face/Object Tracking, 600 °Auto Rotation - hohem iSteady Mobile Plus",
		brand: "hohem",
		rating: 4,
		reviewsCount: 5466,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/61Byjkg0ZhL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
		price: 138,
	},
	{
		id: 35,
		title:
			"Sennheiser HD 560 S Over-The-Ear Audiophile Headphones - Neutral Frequency Response, E.A.R. Technology for Wide Sound Field, Open-Back Earcups, Detachable Cable, (Black) (HD 560S)",
		brand: "Sennheiser Consumer Audio",
		rating: 5,
		reviewsCount: 6585,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/8182xOzfS2L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
		price: 1632,
	},
	{
		id: 36,
		title:
			"Jabra Speak 510 Wireless Bluetooth Speaker for Softphone and Mobile Phone - Easy Setup, Portable Speaker for Holding Meetings Anywhere with Outstanding Sound Quality",
		brand: "Jabra",
		rating: 4,
		reviewsCount: 6,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/817+l+xkusL._AC_SY300_SX300_.jpg",
		price: 768,
	},
	{
		id: 37,
		title:
			"Soundcore by Anker Space Q45 Adaptive Active Noise Cancelling Headphones, Reduce Noise by Up to 98%, 50H Playtime, App Control, LDAC Hi-Res Wireless Audio, Comfortable Fit, Clear Calls, Bluetooth 5.3",
		brand: "Soundcore",
		rating: 1,
		reviewsCount: 3525,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/51zqZRMrWgL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
		price: 1313,
	},
	{
		id: 38,
		title:
			"SAMSUNG Galaxy Buds Pro, Bluetooth Earbuds, True Wireless, Noise Cancelling, Charging Case, Quality Sound, Water Resistant, Phantom Black (US Version)",
		brand: "samsung",
		rating: 2,
		reviewsCount: 695,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/719p0eyZiSL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
		price: 81,
	},
	{
		id: 39,
		title: "Apple AirPods 2 with Charging Case - White (Renewed)",
		brand: "Amazon Renewed",
		rating: 4,
		reviewsCount: 685,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/41XjE57VLvL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
		price: 2934,
	},
	{
		id: 40,
		title:
			"Samsung Galaxy Buds Live, Wireless Earbuds w/Active Noise Cancelling, Mystic Black, International Version",
		brand: "samsung",
		rating: 3,
		reviewsCount: 26,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/314gylSKWPL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
		price: 1362,
	},
	{
		id: 41,
		title:
			"SAMSUNG Galaxy Buds Live True Wireless Earbuds US Version Active Noise Cancelling Wireless Charging Case Included, Mystic Black",
		brand: "samsung",
		rating: 5,
		reviewsCount: 35,
		category: "accessories",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/61rLO8WiDTL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
		price: 1770,
	},
	{
		id: 51,
		title:
			"Samsung Galaxy M13 (Aqua Green, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus",
		brand: "samsung",
		rating: 4,
		reviewsCount: 78686,
		category: "smartphones",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/81-fFXQdPTL._AC_UY436_FMwebp_QL65_.jpg",
		price: 34599,
	},
	{
		id: 53,
		title:
			"realme narzo 50i (Carbon Black, 2GB RAM+32GB Storage) Octa Core Processor | 6.5 inch Large Display",
		brand: "realme",
		rating: 1,
		reviewsCount: 885,
		category: "smartphones",
		thumbnailImage:
			"https://m.media-amazon.com/images/I/81HJ4pkOsiL._AC_UY436_FMwebp_QL65_.jpg",
		price: 80899,
	},
];

const MobileSingleProduct = () => {
	const [product, setProduct] = useState(AllProducts);
	const { title, brand, thumbnailImage, rating, reviewsCount, price } = product;

	return (
		<Box bg={"gray.50"} h={"100vh"}>
			<Navbar />
			<Flex
				className={styles.Product__grid}
				marginInline="auto"
				mt={4}
				p={4}
				gap={4}
				borderRadius={"lg"}
				boxShadow={"base"}
				cursor="pointer"
				bgColor={"#fff"}
				flexDir={["column", "column", "row", "row"]}
			>
				<Center flex={1}>
					<Img
						src={thumbnailImage}
						alt="product"
						objectFit={"contain"}
						h="400px"
						w={"400px"}
					/>
				</Center>
				<Stack gap={2} flex={1}>
					<Stack gap={2} flex={1}>
						<Text fontWeight={700} fontSize={"1.7rem"}>
							{title}
						</Text>
						<Text fontSize={"1.2rem"}>
							brand: <span className={styles.brand__span}>{brand}</span>
						</Text>
						<Flex fontSize={"1.2rem"} align={"center"}>
							<Flex>
								{Array(rating)
									.fill()
									.map((star, i) => (
										<span key={`${Date.now()}-${i}`}>⭐️</span>
									))}
							</Flex>
							<Text>&nbsp;({reviewsCount})</Text>
						</Flex>
						<Text fontSize={"1.7rem"} fontWeight="bold">
							₹ {price}
						</Text>
					</Stack>
					<Button bgColor="#F6AD55" w={"150px"}>
						Add To Cart
					</Button>
				</Stack>
			</Flex>
		</Box>
	);
};

export default MobileSingleProduct;
