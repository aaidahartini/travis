export const locations = [
    {
        id: "junction",
        name: "Canselori Junction",
        congestion: 82,
        vehicleCount: 120,
    },
    {
        id: "entrace",
        name: "UNIMAS Entrance",
        congestion: 58,
        vehicleCount: 95,
    },
];

export const hourlyByLocation = {
    "junction": [
        12, 10, 8, 6, 5, 15, 35, 58,
        82, 72, 48, 45, 60, 62, 55, 65,
        75, 92, 88, 68, 52, 35, 20, 12,
    ],

    "entrace": [
        10, 8, 6, 5, 15, 35, 58, 72,
        82, 72, 48, 45, 60, 62, 55, 65,
        75, 92, 88, 68, 52, 35, 20, 12,
    ],
};