// ✅ 1) Your festival data
const lineup = {
    Friday: {
        "Kinetic Field": [
            { name: "Ninajirachi", time: "7:00 PM - 8:00 PM", spotify: "https://open.spotify.com/artist/3MekbRujJg5VZThubOlrkR?si=PDzd1HguQkmmFX8I7M1kIA" },
            { name: "Ownboss", time: "8:00 PM - 9:00 PM", spotify: "https://open.spotify.com/artist/37czgDRfGMvgRiUKHvnnhj?si=Z7BRSXxyQIWtooJtHQ7p7g" },
            { name: "Maddix", time: "9:00 PM - 10:00 PM", spotify: "https://open.spotify.com/artist/0RMeG9M8QFzss9bAbq99KA?si=ksBbr0xVTSa-zWat4rhT-w" },
            { name: "MK", time: "10:06 PM - 11:15 PM", spotify: "https://open.spotify.com/artist/1yqxFtPHKcGcv6SXZNdyT9?si=8_qzdSAUSFOyrrRkFGEpEg" },
            { name: "Subtronics", time: "11:18 PM - 12:30 AM", spotify: "https://open.spotify.com/artist/3NJ94iuAmmMjbszODYT6pO?si=pu-DBL1LT_-IE1O_7aNjiw" },
            { name: "Armin van Buuren", time: "12:30 AM - 1:45 AM", spotify: "https://open.spotify.com/artist/0SfsnGyD8FpIN4U4WCkBZ5?si=J2d7DJv_S7GMxDp0X_tYCQ" },
            { name: "Illenium", time: "1:47 AM - 3:00 AM", spotify: "https://open.spotify.com/artist/45eNHdiiabvmbp4erw26rg?si=mDPPJBJmSoiFEtAztgVkRg" },
            { name: "David Guetta", time: "3:00 AM - 4:10 AM", spotify: "https://open.spotify.com/artist/1Cs0zKBU1kc0i8ypK3B9ai?si=fVWD-FjjTJ6SOq6Sdek5KQ" },
            { name: "Steve Aoki", time: "4:13 AM - 5:30 AM", spotify: "https://open.spotify.com/artist/77AiFEVeAVj2ORpC85QVJs?si=eDJL68NZT9uwsZ9S1aGBgQ" },

        ],
        "Cosmic Meadow": [
            { name: "Khiva", time: "7:00 PM - 8:20 PM", spotify: "https://open.spotify.com/artist/3cH0fKXiWesYFzqJwiWlAD?si=qzGmNEsOTFuyBEvAH45CGg" },
            { name: "Sicaria", time: "8:20 PM - 9:40 PM", spotify: "https://open.spotify.com/artist/0VY1AVQPJaTDllLBhR35gv?si=Nn4MUifcSGuH9fbtM1wJ5Q" },
            { name: "Hamdi", time: "9:45 PM - 11:00 PM", spotify: "https://open.spotify.com/artist/7vvicoei9BbKpZix8qSeLg?si=Iw8O3TX2QEy_dtwzwFo5Ow" },
            { name: "Dabin", time: "11:05 PM - 12:15 AM", spotify: "https://open.spotify.com/artist/7lZauDnRoAC3kmaYae2opv?si=QpEy-cGiRJuWamyIfpLSeg" },
            { name: "Slander", time: "12:20 AM - 1:45 AM", spotify: "https://open.spotify.com/artist/20DZAfCuP1TKZl5KcY7z3Q?si=YHhUYzfjT8K0gaBPDnH0PA" },
            { name: "LSDREAM", time: "1:50 AM - 3:00 AM", spotify: "https://open.spotify.com/artist/3Hrqjumb6WHg2aAUHJHLND?si=DBWicJo9Qnq9Vni3iYg2FA" },
            { name: "Devault", time: "3:00 AM - 4:10 AM", spotify: "https://open.spotify.com/artist/1VBAKMui4zm5MnBWNn3NbL?si=jI1mw3ZoTz6u3cCEP9KYOg" },
            { name: "FrostTop", time: "4:10 AM - 5:30 AM", spotify: "https://open.spotify.com/artist/6T9vLiLn2HpWHNaaEajGB4?si=wsYqBr9pTqy_SupJteJFiA" },
            { name: "RemK", time: "4:10 AM - 5:30 AM", spotify: "https://open.spotify.com/artist/4IVi10Tw5s4iwiPUvh6DcF?si=_f-f9eWGSOmBlBkTw166tQ" }
        ],

        "Circuit Grounds": [
            { name: "Brina Knauss", time: "7:00 PM - 8:00 PM", spotify: "https://open.spotify.com/artist/3dAC3NjJnsavHLFC8GCyRZ?si=kk_iTYdyQo6YmMctfPaFog" },
            { name: "Cristoph", time: "8:00 PM - 9:15 PM", spotify: "https://open.spotify.com/artist/532SqCIYmJyXEdEiCJLgYG?si=_8Qszu5RTAy1YQ1oyOGtIw" },
            { name: "Cassian", time: "9:15 PM - 10:30 PM", spotify: "https://open.spotify.com/artist/1ChtRJ3f4rbv4vtz87i6CD?si=bcnHE8fnSqCc0aWt7824rA" },
            { name: "Vintage Culture", time: "10:30 PM - 12:00 AM", spotify: "https://open.spotify.com/artist/28uJnu5EsrGml2tBd7y8ts?si=gFoic2AcQ-6eNi2-2CuABQ" },
            { name: "Peggy Gou", time: "12:00 AM - 1:30 AM", spotify: "https://open.spotify.com/artist/2mLA48B366zkELXYx7hcDN?si=A-GhxXIxSXWXiDwZaXd2aw" },
            { name: "Eric Prydz", time: "1:30 AM - 3:00 AM", spotify: "https://open.spotify.com/artist/5sm0jQ1mq0dusiLtDJ2b4R?si=qep4eO53R_y-HkWGLCoasw" },
            { name: "John Summit", time: "3:00 AM - 4:30 AM", spotify: "https://open.spotify.com/artist/7kNqXtgeIwFtelmRjWv205?si=TIum4SnrTw6wcgjRQs8YQQ" },
            { name: "Before Dawn", time: "4:30 AM - 5:30 AM", spotify: "https://open.spotify.com/artist/4SLSFYaUbpjRZGHV3ub7QN?si=Zabg7SNTQdqL-ZamIEX3gw" }
        ],

        "Neon Garden": [
            { name: "Heidi Lawden", time: "7:00 PM - 8:30 PM", spotify: "https://open.spotify.com/artist/78kOxZT91FGSl9PJRc0YTS?si=pG_IOoetTcuQihawqVSN6Q" },
            { name: "Chelina Manuhutu", time: "8:30 PM - 10:00 PM", spotify: "https://open.spotify.com/artist/4IoT1ZwtqNYn1u7q9r62Sy?si=CFgxWLaCQs-7pKoJlCcFjQ" },
            { name: "Lilly Palmer", time: "10:00 PM - 11:30 PM", spotify: "https://open.spotify.com/artist/4h8IEOdrg60WM5XGyNOCVU?si=6MT48lYgSqiWceJeV1HI5A" },
            { name: "Nicole Moudaber", time: "11:30 PM - 1:00 AM", spotify: "https://open.spotify.com/artist/7ixDtqtITfqx5lZQGh5gKe?si=CBC87JSmSTKgTJlgVntUpg" },
            { name: "Adam Beyer", time: "1:00 AM - 2:30 AM", spotify: "https://open.spotify.com/artist/1btv9qmIpbp7q1ixCYNdHu?si=62l3CacaRnulygaSJpODcA" },
            { name: "Carl Cox", time: "2:30 AM - 4:00 AM", spotify: "https://open.spotify.com/artist/19SmlbABtI4bXz864MLqOS?si=JWupDBfvQ16LmkUmiMcRcA" },
            { name: "Carl Cox B2B Nicole Moudaber", time: "4:00 AM - 5:30 AM", spotify: "https://open.spotify.com/artist/19SmlbABtI4bXz864MLqOS?si=JWupDBfvQ16LmkUmiMcRcA" }
        ],

        "Basspod": [
            { name: "Nightstalker", time: "7:00 PM - 7:30 PM", spotify: "https://open.spotify.com/artist/2xG7jGL1rMedFuE8e2u9mX?si=-qsbHFoRSqCmcmnO-ISAAg" },
            { name: "VUIIIGUR", time: "7:30 PM - 8:30 PM", spotify: "https://open.spotify.com/artist/5fa37Ivp1VOQpMJQZyDDrl?si=YALHwkZUQS-TM5cf0tF7pg" },
            { name: "Tape B", time: "8:30 PM - 9:30 PM", spotify: "https://open.spotify.com/artist/59tlsKpLWoLTxjNNS2wdPi?si=B8GM29WKSDe8IapdwSjPWQ" },
            { name: "LAYZ", time: "9:30 PM - 10:30 PM", spotify: "https://open.spotify.com/artist/2ozQcs5XxFaj5fvA02zhwo?si=XjbOxHTTT_qc4BQsrhgRnw" },
            { name: "Jessica Audiffred", time: "10:30 PM - 11:30 PM", spotify: "https://open.spotify.com/artist/4odLDriBk6oEZotzLPTSnD?si=DCzr5l6LRuWtYklrA2H_2Q" },
            { name: "NGHTMRE", time: "11:30 PM - 12:30 AM", spotify: "https://open.spotify.com/artist/76M2Ekj8bG8W7X2nbx2CpF?si=vKpbeLT7TrGBXSo_hJQniQ" },
            { name: "Zomboy", time: "12:30 AM - 1:30 AM", spotify: "https://open.spotify.com/artist/0ycHhPwPvoaO4VGzmMnXGq?si=-wdAhRzER6GbFD2kBQlepw" },
            { name: "MARAUDA", time: "1:30 AM - 2:30 AM", spotify: "https://open.spotify.com/artist/3YLUvWzk9eBm1WrHFlZxM4?si=bMsTVaI5RXm0V85TDzZKWg" },
            { name: "HOL!", time: "2:30 AM - 3:30 AM", spotify: "https://open.spotify.com/artist/75YeSAKC6xPhgkjnltCmGB?si=6Q-cxCOCS5uz9knU4V9kcg" },
            { name: "Adventure Club", time: "3:30 AM - 4:30 AM", spotify: "https://open.spotify.com/artist/5CdJjUi9f0cVgo9nFuJrFa?si=dYg0h9CBQYW00Xe2zylUZQ" },
            { name: "Mersiv", time: "4:30 AM - 5:30 AM", spotify: "https://open.spotify.com/artist/6JU4RsXcN7rLafs39HwFxf?si=Tcx7Zal0QqKbpP8LDTHZHA" }
        ],

        "Wasteland": [
            { name: "Water Spirit", time: "7:00 PM - 8:30 PM", spotify: "https://open.spotify.com/artist/6kDrYhgzsmoiuwHbzWgA41?si=8Bxnj9TdQ4SyB6yap7XFsA" },
            { name: "Yosuf", time: "8:30 PM - 9:30 PM", spotify: "https://open.spotify.com/artist/0pceb68in41LfgvQbkvCzg?si=20bjBHwGTPqQ0aP9GhMQ5Q" },
            { name: "D-Sturb", time: "9:30 PM - 10:30 PM", spotify: "https://open.spotify.com/artist/7E6DrjKJieOdJKO8mbwCMO?si=QNud7TYQQzyqfpb699Vd-A" },
            { name: "Keltek", time: "10:30 PM - 11:30 PM", spotify: "https://open.spotify.com/artist/1Od0hPnXSqA9pipLqNXJ7e?si=UUzpjdYgROqh_775gBKX1A" },
            { name: "Sound Rush", time: "11:30 PM - 12:30 AM", spotify: "https://open.spotify.com/artist/7IFPeV5Ew63S7Hid0AjNgK?si=F5SqQDr5SHO8dKGZLqR8tQ" },
            { name: "Warface", time: "12:30 AM - 1:30 AM", spotify: "https://open.spotify.com/artist/1wuQQfTDZhgNb4GJyhThUs?si=rL_E7FHsSDKKokcK6Z9Jmg" },
            { name: "Hivemind (Kayzo x Space Laces x Must Die!)", time: "1:30 AM - 2:30 AM", spotify: "https://open.spotify.com/artist/0UBlAU9uhtkNnCKmxHddFo?si=egKmWEESSUmNygnMOC1HEQ" },
            { name: "Audiofreq", time: "2:30 AM - 3:30 AM", spotify: "https://open.spotify.com/artist/0hHKtZEXHNsXfgrNgU7Zkl?si=Eoa_8yW6SHyN3fuUBXrp-g" },
            { name: "Hixxy", time: "3:30 AM - 4:30 AM", spotify: "https://open.spotify.com/artist/79PC6rrXA39xOdNTf71dvN?si=Z5f4nA6bTOGWnXxnigPF_A" },
            { name: "Claws B2B Domina", time: "4:30 AM - 5:30 AM", spotify: "https://open.spotify.com/artist/2SaPpXmlY9agJpvlEbLMKD?si=Vk2lg6MPSJCOAywI5nFhXQ" }
        ],

        "Quantum Valley": [
            { name: "Alchimyst", time: "7:00 PM - 8:00 PM", spotify: "https://open.spotify.com/artist/2yrruLNIgKetksilWBdJHy?si=BeN7QkNyRVKVhQcmamhvZQ" },
            { name: "Paul Oakenfold", time: "8:00 PM - 9:00 PM", spotify: "https://open.spotify.com/artist/5MO2kbaGGA2a8kL4c9qqHq?si=zjnUlfB3Sti1DXyRmGHxxQ" },
            { name: "Nifra", time: "9:00 PM - 10:00 PM", spotify: "https://open.spotify.com/artist/4Ipm3lGKLqzhir25JU846A?si=zmZzMNf3SRK1SxnzyvGW1A" },
            { name: "Giuseppe Ottaviani", time: "10:00 PM - 11:00 PM", spotify: "https://open.spotify.com/artist/5B9q1NRokzWYB7nSgnlHyv?si=6Ux_qa48Q3m7fANv-B753g" },
            { name: "Andrew Rayel", time: "11:00 PM - 12:00 AM", spotify: "https://open.spotify.com/artist/1UtBjqMZBAmqIPlDrKu7Tr?si=esBVsapOQBKMWmJax9O-XA" },
            { name: "Markus Schulz", time: "12:00 AM - 1:00 AM", spotify: "https://open.spotify.com/artist/6OO0PboZcIWUWL7j2IyeoL?si=WtXu2ghSRm2IbFFjruVWSg" },
            { name: "Blastoyz", time: "1:00 AM - 2:00 AM", spotify: "https://open.spotify.com/artist/6WLP1sraOcF3Gaxp7xBa4p?si=A61G-PfOSeOLpiIikJzdWA" },
            { name: "Infected Mushroom", time: "2:00 AM - 3:00 AM", spotify: "https://open.spotify.com/artist/6S2tas4z6DyIklBajDqJxI?si=WsdskKPmQsSMnSU8u36Qog" },
            { name: "Orjan Nilsen & Mark Sixma (Nilsix)", time: "3:00 AM - 4:00 AM", spotify: "https://open.spotify.com/artist/1YuNQvsvOsMBm0ahbxB8qM?si=No46nw1CR6aXFTkypWs2-w" },
            { name: "Taylor Torrence", time: "4:00 AM - 5:30 AM", spotify: "https://open.spotify.com/artist/4PhWdminU7odBReTmyyZrH?si=7OCAcK4_Tf2tGYOkTfTLew" }
        ],

        "Stereo Bloom": [
            { name: "ZOF", time: "7:00 PM - 8:00 PM", spotify: "https://open.spotify.com/artist/31ZEegh9kQpn4W6L9efEV5?si=jcbEEjDbS4aPM6EPoVLz8g" },
            { name: "Majestic", time: "8:00 PM - 9:00 PM", spotify: "https://open.spotify.com/artist/6QMABvTzixnxzsLYyhqRxI?si=QR9XgV1gRyqNwWixNoozsA" },
            { name: "Riordan", time: "9:00 PM - 10:00 PM", spotify: "https://open.spotify.com/artist/68rU1sdZ0HjxjEC5YnSmao?si=wSLLecjMQlKDN0nhqiiRaw" },
            { name: "Max Styler", time: "10:00 PM - 11:00 PM", spotify: "https://open.spotify.com/artist/3NKKngINK1tP6BFy0WOyWk?si=KD_MHwyHQyqoRziGFw-1oA" },
            { name: "Odd Mob x Omnom (Hyperbeam)", time: "11:00 PM - 12:00 AM", spotify: "https://open.spotify.com/artist/4qLwtWhlhyAoQ4S9mSrDW9?si=6MBnNW7tSp6nFIpS97E-ag" },
            { name: "J. Worra", time: "12:00 AM - 1:00 AM", spotify: "https://open.spotify.com/artist/4q0N3EI67tVnAeeaXbNQIj?si=Dunte9UAQ9WGYXbw3I209A" },
            { name: "Matroda B2B San Pacho", time: "1:00 AM - 2:15 AM", spotify: "https://open.spotify.com/artist/45lcbTsX07JWzmTIjcdyBz?si=tjNivt-hSRGCKZ4uVgO2Fw" },
            { name: "Noizu", time: "2:15 AM - 3:30 AM", spotify: "https://open.spotify.com/artist/3VRyybsQu0MDG0F2LBxnv7?si=1gP4toISSxqJoZVzEKhLHg" },
            { name: "MISS DRE", time: "3:30 AM - 4:30 AM", spotify: "https://open.spotify.com/artist/4EFAuQI8Ou0bmpf5Vh1P5P?si=hiXQ44DCTyCeJV6OpaliRQ" },
            { name: "Andruss", time: "4:30 AM - 5:30 AM", spotify: "https://open.spotify.com/artist/6HZwb7Zbnvfo8u1sst4QrI?si=Z8x_lO0ySuaSOtPuWdJjUw" }
        ],

        "Bionic Jungle": [
            { name: "Zen Freeman", time: "7:00 PM - 8:30 PM", spotify: "https://open.spotify.com/artist/6WIXrNpbpGraLXs5vhEYJG?si=b1Pb0euXT5mgzLSS-h66IA" },
            { name: "Marlie", time: "8:30 PM - 10:00 PM", spotify: "https://open.spotify.com/artist/3yMpE0UbL30ablXv6XbdGm?si=XxSWPSThS1-MnBH8dbxuaw" },
            { name: "Sally C B2B Matisa", time: "10:00 PM - 11:30 PM", spotify: "https://open.spotify.com/artist/3AkVHCDEo2WuaVtMglFfN8?si=OUrx8HT6RyyPjo9BOOKjMQ" },
            { name: "Jyoty", time: "11:30 PM - 1:00 AM", spotify: "https://open.spotify.com/playlist/3m451rGLPzrzjjlN1WCA7X?si=e015d526f62f46a2" },
            { name: "Dennis Sulta", time: "1:00 AM - 2:30 AM", spotify: "https://open.spotify.com/artist/7cDu9zG1gVQrMdSGBAhzvn?si=kAXsR1OhQzWcsBNYQvh8Tg" },
            { name: "HAAi", time: "2:30 AM - 4:00 AM", spotify: "https://open.spotify.com/artist/0pkLgeB9j465x1QB2kRoy4?si=e5kg3SL9TfqX7QxDuQXMJg" },
            { name: "Justin Jay", time: "4:00 AM - 5:30 AM", spotify: "https://open.spotify.com/artist/5k5eiijuHxrGwXp2Pz37GZ?si=GX1AqsT5QJuUp3_li--RZw" }
        ]
    },

    Saturday: {
        "Kinetic Field": [
            { name: "Rayben", time: "7:00 PM - 8:00 PM", spotify: "https://open.spotify.com/artist/2HnEFMmaUbmt0RTCiTxk47?si=YBBZT6kpRFClQw9uTQE6ow" },
            { name: "Mitis", time: "8:00 PM - 9:00 PM", spotify: "https://open.spotify.com/artist/16yUpGkBRgc2eDMd3bB3Uw?si=vDylSbm_RzywwH1lFoYYTw" },
            { name: "Benny Benassi", time: "9:00 PM - 10:00 PM", spotify: "https://open.spotify.com/artist/4Ws2otunReOa6BbwxxpCt6?si=UtCP7vBJTkKkxrj_RVcnFg" },
            { name: "Matroda", time: "10:06 PM - 11:15 PM", spotify: "https://open.spotify.com/artist/45lcbTsX07JWzmTIjcdyBz?si=_ZzQYFVETRi8I_vd-9tPaQ" },
            { name: "DJ Snake", time: "11:18 PM - 12:28 AM", spotify: "https://open.spotify.com/artist/540vIaP2JwjQb9dm3aArA4?si=IBqhZbvbTaaF2E99cNrdgg" },
            { name: "Tiesto", time: "12:31 AM - 1:41 AM", spotify: "https://open.spotify.com/artist/2o5jDhtHVPhrJdv3cEQ99Z?si=8r7gYewYQtS0jByzcfGWaA" },
            { name: "Zedd", time: "1:47 AM - 2:57 AM", spotify: "https://open.spotify.com/artist/2qxJFvFYMEDqd7ui6kSAcq?si=POb3UFC5RqOZOQunPkCpvQ" },
            { name: "Alison Wonderland", time: "3:00 AM - 4:10 AM", spotify: "https://open.spotify.com/artist/11gWrKZMBsGQWmobv3oNfW?si=ISQRyAT_TYKOusa5BY_Iwg" },
            { name: "ACRAZE B2B Kream", time: "4:13 AM - 5:28 AM", spotify: "https://open.spotify.com/artist/4pnp4w9g30yLfVIAFnZMRd?si=-7SuHJpMRN-0_p_vB6fM_Q" }
        ],
        "Cosmic Meadow": [
            { name: "Camden Cox", time: "7:00 PM - 8:15 PM", spotify: "https://open.spotify.com/artist/5mNpMP01Co4vXZ3U0fWP3C?si=0et52ec3QreywN0u7s0iYw" },
            { name: "Odd Mob", time: "8:15 PM - 9:30 PM", spotify: "https://open.spotify.com/artist/4qLwtWhlhyAoQ4S9mSrDW9?si=g_CDHgJPQCKznWTg55KMlA" },
            { name: "Boys Noize", time: "9:30 PM - 11:00 PM", spotify: "https://open.spotify.com/artist/62k5LKMhymqlDNo2DWOvvv?si=F9wDZjNlR_SMR-x2W9TYPw" },
            { name: "Purple Disco Machine", time: "11:00 PM - 12:15 AM", spotify: "https://open.spotify.com/artist/2WBJQGf1bT1kxuoqziH5g4?si=4_fSi7lbTEWMZnka_zebxw" },
            { name: "Deorro", time: "12:15 AM - 1:45 AM", spotify: "https://open.spotify.com/artist/6VD4UEUPvtsemqD3mmTqCR?si=zBRAtAhjSgqXxj3UQ7hGbQ" },
            { name: "Dillon Francis", time: "1:45 AM - 3:00 AM", spotify: "https://open.spotify.com/artist/5R3Hr2cnCCjt220Jmt2xLf?si=fzs_45JFRB2QGI-kxOrf1g" },
            { name: "Troy Boi", time: "3:00 AM - 4:00 AM", spotify: "https://open.spotify.com/artist/0tvpihdAsKiNnP6sWS3jUI?si=EtAIYlOcRGGXrdymksfKTQ" },
            { name: "Worship (Sub Focus, Dimension, Culture Shock, 1991)", time: "4:00 AM - 5:30 AM", spotify: "https://open.spotify.com/artist/0QaSiI5TLA4N7mcsdxShDO?si=9MQiSrVGSmOHPKutyIxEsA" }
        ],
        "Circuit Grounds": [
            { name: "Airwolf Paradise", time: "7:00 PM - 8:00 PM", spotify: "https://open.spotify.com/artist/0c3I7EPZUCCG7khbUwQDjl?si=OByhPLbPRh-myo7g9IxhAw" },
            { name: "Kyle Walker", time: "8:00 PM - 9:00 PM", spotify: "https://open.spotify.com/artist/4kB1srfgZ4eok7CmDqyOJP?si=FabPJg1QSA-DjTKEvM0WTw" },
            { name: "Ben Hemsley", time: "9:00 PM - 10:00 PM", spotify: "https://open.spotify.com/artist/366L4EjZXBPYbHs9XDQILZ?si=8FADdFf9R3G1uQLCKFPQkg" },
            { name: "Four Tet", time: "10:00 PM - 11:30 PM", spotify: "https://open.spotify.com/artist/7Eu1txygG6nJttLHbZdQOh?si=Sh-QuqXNST21GgxNdBshZQ" },
            { name: "Special Guest", time: "11:30 PM - 1:00 AM", spotify: "https://open.spotify.com/artist/3x7F5VVSw06tevw6yQyFUj?si=L5sHFDamQqSWqFiTRnB9kw" },
            { name: "Dom Dolla", time: "1:00 AM - 2:15 AM", spotify: "https://open.spotify.com/artist/205i7E8fNVfojowcQSfK9m?si=TfjHYXjOTwCqnK-6-MShgw" },
            { name: "Eli Brown B2B HI-LO", time: "2:15 AM - 3:30 AM", spotify: "https://open.spotify.com/artist/5lVNSw2GPci8kebrAQpZqU?si=i07UqZAwRjGZHPQuYM1vIQ" },
            { name: "Wade", time: "3:30 AM - 4:30 AM", spotify: "https://open.spotify.com/artist/09iEIVQVBtTVjiuEdqqkIR?si=tnyAbgEsT8C7CZlPhuZLWA" },
            { name: "MK (Sunrise Set)", time: "4:30 AM - 5:30 AM", spotify: "https://open.spotify.com/artist/1yqxFtPHKcGcv6SXZNdyT9?si=sqP9JHkbS_eZ5O2MAXb-HQ" }
        ],
        "Neon Garden": [
            { name: "Malone", time: "7:00 PM - 8:30 PM", spotify: "https://open.spotify.com/artist/7fQMET8UaHL3gpH9LhqINM?si=3_NnxnFHR921OkyWOdd3yw" },
            { name: "Ben Sterling", time: "8:30 PM - 10:00 PM", spotify: "https://open.spotify.com/artist/79uJoLQkQ621xZy7MyH4uL?si=7cWyXqXFTqyJjP84_sGqUQ" },
            { name: "Marcel Dettmann", time: "10:00 PM - 11:00 PM", spotify: "https://open.spotify.com/artist/1sxHp39RqBEE01pgVqsdyP?si=dx3RyHWtS02yfpgjVB3FMw" },
            { name: "Peggy Gou B2B Marcel Dettmann", time: "11:00 PM - 12:00 AM", spotify: "https://open.spotify.com/artist/2mLA48B366zkELXYx7hcDN?si=MTtgkRE7RpeIGrlQamsWgw" },
            { name: "Peggy Gou", time: "12:00 AM - 1:00 AM", spotify: "https://open.spotify.com/artist/2mLA48B366zkELXYx7hcDN?si=MTtgkRE7RpeIGrlQamsWgw" },
            { name: "Jamie Jones", time: "1:00 AM - 2:30 AM", spotify: "https://open.spotify.com/artist/4admDxmnri5Zco0xYrJ0ji?si=wB5M9CSiQPGl4qZMwlWC9Q" },
            { name: "Loco Dice", time: "2:30 AM - 4:00 AM", spotify: "https://open.spotify.com/artist/4rbw4Z9Hjn6n9x5oYzZe7P?si=OcWo9TfYTEKf1Rw9iDPvbg" },
            { name: "Joseph Capriati", time: "4:00 AM - 5:30 AM", spotify: "https://open.spotify.com/artist/7onsqSWPufMm5ZnUCECDpf?si=FYUF0HVNSA2i_IPEcXxTzA" }
        ],
        "Basspod": [
            { name: "Fallen with MC Dino", time: "7:00 PM - 7:30 PM", spotify: "https://open.spotify.com/artist/29oE14PgunudxvqSQvZCWq?si=F3HVEyw5Qx-MzbTJXgvIVg" },
            { name: "Chef Boyarbeatz", time: "7:30 PM - 8:30 PM", spotify: "https://open.spotify.com/artist/7nSk3iFPogRCOokrMliejt?si=oiqXB3RYQyOubmYwR2QInA" },
            { name: "Rated R", time: "8:30 PM - 9:30 PM", spotify: "https://open.spotify.com/artist/7LjnXw8QLtGkt9GSwyo7aj?si=DcZoTtm-TaKBCFrXf_UhYQ" },
            { name: "Bou", time: "9:30 PM - 10:30 PM", spotify: "https://open.spotify.com/artist/35dxfY1wywqVRUEaVuMm13?si=VtFhGHb6Sl-iDVGHcG79Dg" },
            { name: "Wilkinson", time: "10:30 PM - 11:30 PM", spotify: "https://open.spotify.com/artist/6m8itYST9ADjBIYevXSb1r?si=863wFxNuRrC5DWSoWHkTKg" },
            { name: "Wooli", time: "11:30 PM - 12:30 AM", spotify: "https://open.spotify.com/artist/1Uyqa2sdHm1bL5JK4IC4zc?si=J0fToB7aSguTQzhH_5_acg" },
            { name: "Hedex", time: "12:30 AM - 1:30 AM", spotify: "https://open.spotify.com/artist/22I9QWygJ2IfxR855VsA3t?si=Tm5H9NNvTZaw5Ua2mZe4Tw" },
            { name: "Subtronics B2B Level Up", time: "1:30 AM - 2:30 AM", spotify: "https://open.spotify.com/artist/3NJ94iuAmmMjbszODYT6pO?si=CTvy6gs1TJGXSm-39Vj7bQ" },
            { name: "Boogie T", time: "2:30 AM - 3:30 AM", spotify: "https://open.spotify.com/artist/4zlw0jXUzd4dRcqI3Y1OiY?si=pt5aFDcbTsyuwVRO-klqew" },
            { name: "Caspa", time: "3:30 AM - 4:30 AM", spotify: "https://open.spotify.com/artist/4nMuaJ4kBLDJCRBizNESI6?si=c37jwrebTL-b7yvCYOebDA" },
            { name: "Crankdat", time: "4:30 AM - 5:30 AM", spotify: "https://open.spotify.com/artist/5lCekoJW9jNq01B1wiqdAb?si=v4uszeBeTtS4bR4sfq3Mrw" }
        ],
        "Wasteland": [
            { name: "SOREN", time: "7:00 PM - 8:30 PM", spotify: "https://open.spotify.com/artist/5HAvpiAJqMMyW1ZtTkHhkq?si=cP99LLa2QRCT3fXFQL5ymw" },
            { name: "Kreation B2B Darksiderz", time: "8:30 PM - 9:30 PM", spotify: "https://open.spotify.com/artist/3xDNY0vcZ7JBBX5fhdbT83?si=NIDxt4XqRyeg_R4H1T9r5Q" },
            { name: "GRAVEDGR", time: "9:30 PM - 10:30 PM", spotify: "https://open.spotify.com/artist/1kiZfWU37oS0pCOV7Os1Pj?si=40GdvnBiQWy5Oul2PYPXBA" },
            { name: "Atmozfears", time: "10:30 PM - 11:30 PM", spotify: "https://open.spotify.com/artist/0MBGxwmCdXdO26ojaNcT64?si=3ReX14muSyK0gN17FXfgFw" },
            { name: "Adrenalize B2B Wasted Penguinz", time: "11:30 PM - 12:30 AM", spotify: "https://open.spotify.com/artist/6GebWeCCtey5pbQepRYD6c?si=Ek_jSfk9RLKpfup_OJMtjw" },
            { name: "Sub Zero Project", time: "12:30 AM - 1:30 AM", spotify: "https://open.spotify.com/artist/4f0OXMMSxr0r8Ztx6CdpAl?si=O8xrWeObRPCYRehRZkP0Jw" },
            { name: "Lil Texas", time: "1:30 AM - 2:30 AM", spotify: "https://open.spotify.com/artist/76raIy8boaM9sf9gMGXGJ5?si=bYBUMIh1RH-NguN-it_Zew" },
            { name: "Devin Wild", time: "2:30 AM - 3:30 AM", spotify: "https://open.spotify.com/artist/4ksdbwHbqSmv7sWP3W6L21?si=hCfwJPhNT3KPLfPqCF-OhA" },
            { name: "Creeds + Helen Ka", time: "3:30 AM - 4:30 AM", spotify: "https://open.spotify.com/artist/2gW0M5fn2r7Lo4Hn1r8HZ5?si=d_3J1v0WRACfA0eDtvvuVQ" },
            { name: "Dead X B2B Levenkhan", time: "4:30 AM - 5:30 AM", spotify: "https://open.spotify.com/artist/0ceEjm8IKMdK5BjMmnGMrd?si=mqkMrfRmRoeEKmMjyHEnEg" }
        ], "Quantum Valley": [
            { name: "Miyuki", time: "7:00 PM - 8:30 PM", spotify: "https://open.spotify.com/artist/3jy26GTtKFUsM26F4bUlwK?si=w-bbE4JLRC-u7kyswUpf_w" },
            { name: "Daxson", time: "8:30 PM - 9:30 PM", spotify: "https://open.spotify.com/artist/4WwMR8h0vztJLNgiL5ZFqW?si=dH-MNJ0TTsGfijJTJ1EFWA" },
            { name: "Talla 2XLC", time: "9:30 PM - 10:30 PM", spotify: "https://open.spotify.com/artist/4cc7cII4mEQqKtczWKQVjJ?si=ptIB5evMRT2GYup5T0B_EA" },
            { name: "Bryan Kearney", time: "10:30 PM - 11:30 PM", spotify: "https://open.spotify.com/artist/5fBbVsFxoa0jDCqocaEdBx?si=uzLmDnZHQiqZwE_L3W-8-w" },
            { name: "Andrew Bayer", time: "11:30 PM - 12:30 AM", spotify: "https://open.spotify.com/artist/5dFuu05x8SPBuymudrTBU8?si=NUI9jga7QhS7kc8BuLoa-Q" },
            { name: "Ferry Corsten", time: "12:30 AM - 1:30 AM", spotify: "https://open.spotify.com/artist/2ohlvFf9PBsDELdRstPtlP?si=WqidlvRiRB-yQfv_Ag0E5w" },
            { name: "Paul van Dyk", time: "1:30 AM - 2:30 AM", spotify: "https://open.spotify.com/artist/7wU1naftD3lNq7rNsiDvOR?si=yNLiA7IIRrCylCU3nudLGA" },
            { name: "Aly & Fila", time: "2:30 AM - 3:30 AM", spotify: "https://open.spotify.com/artist/2hL1EouqXLtBEB6JKnPF0h?si=RWbBW56jSZ-vnyUooeCQwQ" },
            { name: "John 00 Fleming", time: "3:30 AM - 4:30 AM", spotify: "https://open.spotify.com/artist/03d3gEeUbbpEOOoRVfX1zZ?si=jA0Y7pcxR361_f2nYvMpTA" },
            { name: "Metta & Glyde", time: "4:00 AM - 5:30 AM", spotify: "https://open.spotify.com/artist/3EwTsHqJhfcUgV3zv2yHxQ?si=6xgHM3cfRDCkhQGSV22rhg" }
        ],
        "Stereo Bloom": [
            { name: "Joluca", time: "7:00 PM - 8:00 PM", spotify: "https://open.spotify.com/artist/3giycuiv9FsMjaSEsJ8i1E?si=uyB7C6LzT6yEUM2soiMkAA" },
            { name: "Mele", time: "8:00 PM - 9:00 PM", spotify: "https://open.spotify.com/artist/6EZO7Baz0SIFskWTO1GHqX?si=A4JzzzbpSZKxzPURuweCfw" },
            { name: "Hannah Laing", time: "9:00 PM - 10:00 PM", spotify: "https://open.spotify.com/artist/1QEd635szhierW6gzRiS1o?si=2rDYyj0tTxuDJn8xb-HhHg" },
            { name: "Kevin Saunderson B2B DJ Minx", time: "10:00 PM - 11:15 PM", spotify: "https://open.spotify.com/artist/0jS6VTFGujWxinY5TSQwOG?si=vuCEIUhiT-2I7V6-H4_mNQ" },
            { name: "Eli Brown", time: "11:15 PM - 12:30 AM", spotify: "https://open.spotify.com/artist/5lVNSw2GPci8kebrAQpZqU?si=syl-fLy8Q7eZ_W20vKIetA" },
            { name: "Kevin de Vries", time: "12:30 AM - 1:45 AM", spotify: "https://open.spotify.com/artist/11aPF3sc8lDWNqPVInm4Zx?si=im_M-8ONTD2B5bOmwzHFMQ" },
            { name: "Will Clarke", time: "1:45 AM - 3:00 AM", spotify: "https://open.spotify.com/artist/1OmOdgwIzub8DYPxQYbbbi?si=ujizMzSTSDqckFjjTmmELA" },
            { name: "Matt Sassari", time: "3:00 AM - 4:15 AM", spotify: "https://open.spotify.com/artist/21dVknSLCsK37cWozWDZZS?si=to1m_NWlQaSk6ZVeRATrAg" },
            { name: "BEC", time: "4:15 AM - 5:30 AM", spotify: "https://open.spotify.com/artist/2rRlbUvyMjvEOdQPWtGoPI" }
        ],
        "Bionic Jungle": [
            { name: "Bianca Oblivion", time: "7:00 PM - 8:00 PM", spotify: "https://open.spotify.com/artist/4aoxM9H8u55MtDh7lkjj94?si=aN3_mavUS4248_9Y0ORYBw" },
            { name: "Pantero666", time: "8:00 PM - 9:15 PM", spotify: "https://open.spotify.com/artist/7DYEJjAIWCn1DNttRqVomt?si=uleUriTERUKEP4yNIb7Jng" },
            { name: "Interplanetary Criminal", time: "9:15 PM - 10:30 PM", spotify: "https://open.spotify.com/artist/6uJ51uV5rYzu1MJkC4CceI?si=88iOJwb1RoK6mQCQj5088g" },
            { name: "DJ Heartstring", time: "10:30 PM - 12:30 AM", spotify: "https://open.spotify.com/artist/5tcwaJBUyEdxQxvieuQxU7?si=PenArf1dSSuDsSd9mNqu2Q" },
            { name: "Skin On Skin", time: "12:30 AM - 2:00 AM", spotify: "https://open.spotify.com/artist/5mnxMXIM6BNhVVTXnBatKa?si=kuLTXGTjQa-5FxQ41wgWjA" },
            { name: "X-Coast", time: "2:00 AM - 3:30 AM", spotify: "https://open.spotify.com/artist/5QUHrSea6F2nhn9veAq4wQ?si=rwuW80hPQ1m_sS0kRl-8BQ" },
            { name: "Boys Noize B2B VTSS", time: "3:30 AM - 5:30 AM", spotify: "https://open.spotify.com/artist/62k5LKMhymqlDNo2DWOvvv?si=pyPpDaD9QlePNt05CMKQww" }
        ],
    },
    Sunday: {
        "Kinetic Field": [
            { name: "ZUEZEU", time: "7:00 PM - 8:00 PM", spotify: "https://open.spotify.com/artist/3dEV8wac1UcsWRFAK3u2vQ?si=FXh2efViTdWAvCiFrNgtAw" },
            { name: "Wuki", time: "8:00 PM - 9:00 PM", spotify: "https://open.spotify.com/artist/6Se1y4vDcu9fVHLqdj1N3q?si=spgbSjNtSCCs7Jh10kJUXw" },
            { name: "Lost Frequencies", time: "9:00 PM - 10:00 PM", spotify: "https://open.spotify.com/artist/7f5Zgnp2spUuuzKplmRkt7?si=dw9WVnhxSWiOAg7rvNU8Lg" },
            { name: "Mau P", time: "10:06 PM - 11:15 PM", spotify: "https://open.spotify.com/artist/0w1sbtZVQoK6GzV4A4OkCv?si=pIsi7LMVTh2hSQPb46EDGw" },
            { name: "Alesso", time: "11:18 PM - 12:28 AM", spotify: "https://open.spotify.com/artist/4AVFqumd2ogHFlRbKIjp1t?si=cpdjMuT6Q7au2qZcYmZQzA" },
            { name: "Gryffin", time: "12:31 AM - 1:41 AM", spotify: "https://open.spotify.com/artist/2ZRQcIgzPCVaT9XKhXZIzh?si=D5tfyXx1TrygB-FemUpbaQ" },
            { name: "Kaskade", time: "1:47 AM - 2:57 AM", spotify: "https://open.spotify.com/artist/6TQj5BFPooTa08A7pk8AQ1?si=jUFCdtSgTn2JSKQ3krwO7w" },
            { name: "Fisher", time: "3:00 AM - 4:10 AM", spotify: "https://open.spotify.com/artist/1VJ0briNOlXRtJUAzoUJdt?si=WQaHQf5GRqmg9YesjeMVgQ" },
            { name: "John Summit B2B Green Velvet", time: "4:13 AM - 5:28 AM", spotify: "https://open.spotify.com/artist/7kNqXtgeIwFtelmRjWv205?si=1-cNIkW2S2SWu09Iw8O5HA" }
        ],

        "Cosmic Meadow": [
            { name: "Mary Droppinz", time: "7:00 PM - 8:15 PM", spotify: "https://open.spotify.com/artist/4tPVnr7VB15UA9TRsie3cS?si=_AaRaysyQWCJzBA4zD7UrA" },
            { name: "Deeper Purpose", time: "8:15 PM - 9:30 PM", spotify: "https://open.spotify.com/artist/10Bo1ofGMWr6hFD7OM7W7r?si=0-0QxxiISvi4i4M3q4Jfeg" },
            { name: "HUGEL", time: "9:45 PM - 11:00 PM", spotify: "https://open.spotify.com/artist/5PlfkPxwCpRRWQJBxCa0By?si=GvKBU55RRqGwHLu71XOnuw" },
            { name: "Sofi Tukker (DJ Set)", time: "11:00 PM - 12:15 AM", spotify: "https://open.spotify.com/artist/586uxXMyD5ObPuzjtrzO1Q?si=bP_ilXOCTo6p8rr2PIyT-w" },
            { name: "Diplo", time: "12:15 AM - 1:45 AM", spotify: "https://open.spotify.com/artist/5fMUXHkw8R8eOP2RNVYEZX?si=Lrd4waeBTnWI9Hp2NE5Brw" },
            { name: "deadmau5", time: "1:45 AM - 3:00 AM", spotify: "https://open.spotify.com/artist/2CIMQHirSU0MQqyYHq0eOx?si=CXAdFTJnTyik0fmro3gcvQ" },
            { name: "Kasablanca", time: "3:10 AM - 4:10 AM", spotify: "https://open.spotify.com/artist/297Z0teiCkp5s9eneWROpI?si=18kNniW3TVeHeU9S9FRR8Q" },
            { name: "Valentino Khan", time: "4:15 AM - 5:30 AM", spotify: "https://open.spotify.com/artist/0deIjoDjl9g9Zpw0sCIOHh?si=xUZqlnQ0RHOrNTUoxhTviA" }
        ],

        "Circuit Grounds": [
            { name: "IVY", time: "7:00 PM - 8:00 PM", spotify: "https://open.spotify.com/artist/3bXszy3HMRqUhnON4Bpojw?si=JG4wCNVnRTSMqupMh2VAfw" },
            { name: "Koven", time: "8:00 PM - 9:00 PM", spotify: "https://open.spotify.com/artist/3UCbp6D1lvILlxRJT9LnFa?si=wJ83ey0VS6in6XrwX5eCog" },
            { name: "Sub Focus", time: "9:00 PM - 10:00 PM", spotify: "https://open.spotify.com/artist/0QaSiI5TLA4N7mcsdxShDO?si=bwzep3xHQI6KyO8ebd9OPw" },
            { name: "Sara Landry", time: "10:00 PM - 11:00 PM", spotify: "https://open.spotify.com/artist/7eILArMiTFTQf8SEh5fFHK?si=pgBf4XrYRVefaJfj5px-zw" },
            { name: "Seven Lions", time: "11:02 PM - 12:15 AM", spotify: "https://open.spotify.com/artist/6fcTRFpz0yH79qSKfof7lp?si=KV8tGH9BS6eq4bRGssXLWA" },
            { name: "Martin Garrix", time: "12:15 AM - 1:45 AM", spotify: "https://open.spotify.com/artist/60d24wfXkVzDSfLS6hyCjZ?si=pAVxHIevTqK0MqfIm-OfdA" },
            { name: "Excision", time: "1:45 AM - 3:00 AM", spotify: "https://open.spotify.com/artist/5FKchcZpQOkqFvXBj1aCvb?si=vN3BNJZATyyix2RTQXxsAA" },
            { name: "Kayzo Unleashed XL", time: "3:05 AM - 4:20 AM", spotify: "https://open.spotify.com/artist/72iCiKwu6nu6Qq9emIwzYv?si=-ZgUB10xTkOWdxvOiZ4gdQ" },
            { name: "Timmy Trumpet", time: "4:25 AM - 5:30 AM", spotify: "https://open.spotify.com/artist/0CbeG1224FS58EUx4tPevZ?si=qmLaxPUdRDuQS2JClVPF-g" }
        ],

        "Neon Garden": [
            { name: "Adam X", time: "7:00 PM - 9:00 PM", spotify: "https://open.spotify.com/artist/4puKiwP3DNIzEaxPCheUbj?si=cbcgjjPQTCCEoLDuzUZhtg" },
            { name: "Shlomo", time: "9:00 PM - 11:00 PM", spotify: "https://open.spotify.com/artist/0ZdNs1hU6aAiaZxvFbtDWF?si=jYvEbCxeRsCCBA3Y6omNTw" },
            { name: "Deborah De Luca", time: "11:00 PM - 12:45 AM", spotify: "https://open.spotify.com/artist/144HzhpLjcR9k37w5Ico9B?si=5zzQpik-R7Sp_JhHwM2sQA" },
            { name: "Klangkuenstler", time: "12:45 AM - 2:15 AM", spotify: "https://open.spotify.com/artist/6H77vD9YyhyxHBTkRpbMBk?si=oImztyCEQLK03x_BI5hTVg" },
            { name: "Indira Paganotto", time: "2:15 AM - 3:45 AM", spotify: "https://open.spotify.com/artist/0JXc5G7ZImFTwPg3y8MTfR?si=3xRXyToRRoK-yGOzhA3clQ" },
            { name: "Trym", time: "3:45 AM - 5:30 AM", spotify: "https://open.spotify.com/artist/5Nd385K2g3s0828W8Ab70z?si=xph9GGlKSWWGC3LstRI-zw" }
        ],

        "Basspod": [
            { name: "Richter", time: "7:00 PM - 7:30 PM", spotify: "https://open.spotify.com/artist/6Ad4dWOSVxJ0UTGO3gPb0V?si=NwzwQFJDRbKINaqY6d77YA" },
            { name: "JEANIE", time: "7:30 PM - 8:30 PM", spotify: "https://open.spotify.com/artist/5y4xjNwy9GEFC4hic2epwe?si=vqIOasrqSYyX6bHD87dNRw" },
            { name: "Zingara", time: "8:30 PM - 9:30 PM", spotify: "https://open.spotify.com/artist/5LxbXRVEMOw6i1WSa2YQn1?si=enWcLCE7QW61Hexu0qGLhw" },
            { name: "Emorfik", time: "9:30 PM - 10:30 PM", spotify: "https://open.spotify.com/artist/34bGTqa9HJUnf14IOHt6pc?si=esPDX2iYRrqVCxsRpnrMlg" },
            { name: "Ghastly presents Ghengar", time: "10:30 PM - 11:30 PM", spotify: "https://open.spotify.com/artist/2Sa4c9qKaI7ILJs8D6gUCh?si=CYyraoMnTk6WUL0c2S5CEQ" },
            { name: "Dimension", time: "11:30 PM - 12:30 AM", spotify: "https://open.spotify.com/artist/1QMgre3BHX161ZHtWMUu6S?si=VmqL1u8RTmGVf8wfKLG6xQ" },
            { name: "ATLiens", time: "12:30 AM - 1:30 AM", spotify: "https://open.spotify.com/artist/74RET4rCZPTGzhsLjD0i3g?si=R_JqU9zRQE--j-Nq6I4dqw" },
            { name: "Svdden Death", time: "1:30 AM - 2:30 AM", spotify: "https://open.spotify.com/artist/2u01kCKA5wDvvztuH8lyT0?si=K0g0CvzZRTyizaglKuNOhw" },
            { name: "Kai Wachi", time: "2:30 AM - 3:30 AM", spotify: "https://open.spotify.com/artist/2fNr4ldujwq97v1jWeqs8K?si=estNiN6fSx-xYsrxtw_XHQ" },
            { name: "Virtual Riot", time: "3:30 AM - 4:30 AM", spotify: "https://open.spotify.com/artist/4FXGRMSHh2JjHxVwS8dhH1?si=1mbTjQW1QwGhGUjXukf0Rg" },
            { name: "Jon Casey", time: "4:30 AM - 5:30 AM", spotify: "https://open.spotify.com/artist/5ttBnysifryX99bjzeFPGr?si=0qoPLo17RjWfcyFv4bhJgg" }
        ],

        "Wasteland": [
            { name: "Omar Santana", time: "7:00 PM - 8:30 PM", spotify: "https://open.spotify.com/artist/4jlINwGiH4WGCv6OCRNdpT?si=DCEkswlHQdGB61jTg1EC7w" },
            { name: "GEO", time: "8:30 PM - 9:30 PM", spotify: "https://open.spotify.com/artist/7IrT0MoBoHV6n8ue5u6F1p?si=QgSIoOieSBC4_RAdt0L_zg" },
            { name: "Mandy", time: "9:30 PM - 10:30 PM", spotify: "https://open.spotify.com/artist/59VlEky6rgwrcluurlvspE?si=taNrAJodQuWcqvWOLFxyYg" },
            { name: "Wasted Penguinz", time: "10:30 PM - 11:30 PM", spotify: "https://open.spotify.com/artist/1Ok5WQlGEnuFOiUlpCKcVT?si=Cx5Zrj52T_O4DSNoZnUokg" },
            { name: "Lady Faith", time: "11:30 PM - 12:30 AM", spotify: "https://open.spotify.com/artist/1va2Hj3SvWvu3L6jAN6k01?si=tFuZdEAeQFaqYS0zK_XqdA" },
            { name: "Devin Wild B2B Keltek", time: "12:30 AM - 1:30 AM", spotify: "https://open.spotify.com/artist/4ksdbwHbqSmv7sWP3W6L21?si=4TIv23CMQruCSKO_t8ww7g" },
            { name: "Da Tweekaz", time: "1:30 AM - 2:30 AM", spotify: "https://open.spotify.com/artist/6UOk7DmvqlzWmo6gjhZvn6?si=z0yTwyjcSzeH_38sv15kSg" },
            { name: "Angerfist", time: "2:30 AM - 3:30 AM", spotify: "https://open.spotify.com/artist/4sQNUQjOYj9rV2sdfJ8laS?si=vtjze7i1RROGMsQVJcV2PQ" },
            { name: "Deadly Guns", time: "3:30 AM - 4:30 AM", spotify: "https://open.spotify.com/artist/1RsU9zuGACUb1NGShiFpcP?si=cA4qNHvbTi2MKIVsKuyD4A" },
            { name: "DEATH CODE", time: "4:30 AM - 5:30 AM", spotify: "https://open.spotify.com/artist/4TxNiQlZXcBj79ySTx9f2o?si=xeLlJHARSduAG9M1EUsgAw" }
        ],

        "Quantum Valley": [
            { name: "Naz", time: "7:00 PM - 8:00 PM", spotify: "https://open.spotify.com/artist/3Y2xG44uOIP7Wns7KYhAJ8?si=D5Ivu3jKRJ6gtkYcUBmWUg" },
            { name: "KhoMha", time: "8:00 PM - 9:00 PM", spotify: "https://open.spotify.com/artist/4ngwbMFTQKrLkLfREBYrvW?si=nE6AESk4RMqpegXFwlcDZA" },
            { name: "Luttrell", time: "9:00 PM - 10:00 PM", spotify: "https://open.spotify.com/artist/4EOyJnoiiOJ4vuNhSBArB2?si=DbDNWUZxTAylCXGLc1A67g" },
            { name: "Jerome Isma-Ae", time: "10:00 PM - 11:00 PM", spotify: "https://open.spotify.com/artist/4GEIawzVZxWGdtl9OOdgeA?si=MQQIvpcnS2WhvgPtj20ODw" },
            { name: "Marsh", time: "11:00 PM - 12:00 AM", spotify: "https://open.spotify.com/artist/1eucLGnPT27tdEh6MU29wp?si=wujfAQ0MSpeUSTesj2_W1g" },
            { name: "Yotto", time: "12:00 AM - 1:00 AM", spotify: "https://open.spotify.com/artist/5Dyfxq0ZrFjjeFBdSNxDbo?si=ACihveSERu2_3ASyRKS_tg" },
            { name: "Pryda", time: "1:00 AM - 2:15 AM", spotify: "https://open.spotify.com/artist/37U9sPqTZMd7AKJCWgcvkt?si=Sug6ZXOiQieV0hoU7TLHMA" },
            { name: "Kevin de Vries", time: "2:15 AM - 3:30 AM", spotify: "https://open.spotify.com/artist/11aPF3sc8lDWNqPVInm4Zx?si=lQsFCR3US-OkWBugb09NGQ" },
            { name: "Mind Against", time: "3:30 AM - 4:30 AM", spotify: "https://open.spotify.com/artist/48LWLoeY0dhwaiX1FRsn72?si=pkWwNDyvTkydnKXWoF-gZQ" },
            { name: "Argy", time: "4:30 AM - 5:30 AM", spotify: "https://open.spotify.com/artist/1NaQOKgddaJipUtmptb7GI?si=QdwN__RrTzewRbvFetkF_A" }
        ],

        "Stereo Bloom": [
            { name: "Pocket", time: "7:00 PM - 8:15 PM", spotify: "https://open.spotify.com/artist/2VizsdU66dsMBEg8h4Vkzo?si=cuhXRThaS7yGYHQ09gSmIA" },
            { name: "Calussa", time: "8:00 PM - 9:15 PM", spotify: "https://open.spotify.com/artist/0BlAuudg3BELkqP2nONKSW?si=IBrGvQ05SRWRPpvVJDzXsA" },
            { name: "Azzecca", time: "9:30 PM - 10:30 PM", spotify: "https://open.spotify.com/artist/2k5DY2QDU3kBi5DX7OQlWj?si=OZ87waQZQLSprV4Xe2TBWQ" },
            { name: "LF SYSTEM", time: "10:30 PM - 11:30 PM", spotify: "https://open.spotify.com/artist/0HxX6imltnNXJyQhu4nsiO?si=-V3v4a8YRt-r_xNwIFQp1A" },
            { name: "Shiba San", time: "11:30 PM - 12:30 AM", spotify: "https://open.spotify.com/artist/7Hr9bE0u9Rl5n6QahVNRnc?si=ywk9NBdrR42KJE1WJERJWg" },
            { name: "HUGEL & Friends", time: "12:30 AM - 1:45 AM", spotify: "https://open.spotify.com/artist/5PlfkPxwCpRRWQJBxCa0By?si=8eg60savQP-tgvWfOkeq0Q" },
            { name: "HoneyLuv", time: "1:45 AM - 2:45 AM", spotify: "https://open.spotify.com/artist/1sl3gVNz3Nxd4poA8f76sl?si=weDOE2jvSKSnYHH7YGHjBA" },
            { name: "Sosa", time: "2:45 AM - 3:45 AM", spotify: "https://open.spotify.com/artist/3JlN0MeWVJq0vjvsvWCRZ5?si=2Vhxp7UuRXeFdmmT6tLDfg" },
            { name: "TOBEHONEST", time: "3:45 AM - 4:45 AM", spotify: "https://open.spotify.com/artist/5aE4f6qwsXT5hACySkxJQo?si=_WYak55MS_2q7hGxj3igKA" },
            { name: "Abana B2B D. Zeledon", time: "4:45 AM - 5:30 AM", spotify: "https://open.spotify.com/artist/50IriuukwhBFpJS9WOk2a1?si=unDBTDBLTi23LCBrkQs7FQ" }
        ],

        "Bionic Jungle": [
            { name: "Hint of Lavender", time: "7:00 PM - 8:00 PM", spotify: "https://soundcloud.com/hintoflavender" },
            { name: "Fleur Shore", time: "8:00 PM - 9:00 PM", spotify: "https://open.spotify.com/artist/7GyRA9n7JVslQGcbo72Dil?si=WPDa9uYBQPefxJn88BGdTQ" },
            { name: "Prunk", time: "9:00 PM - 11:00 PM", spotify: "https://open.spotify.com/artist/6FJfLfGO9X2AVNz0sFscrG?si=wBRhDrq8RyuUajG5QC_enQ" },
            { name: "Ranger Trucco", time: "11:00 PM - 12:30 AM", spotify: "https://open.spotify.com/artist/36N80lh8tNu7XedcW55NC3?si=DGxxlF5mRtS40aj3cm8Pgg" },
            { name: "Sidney Charles", time: "12:30 AM - 2:00 AM", spotify: "https://open.spotify.com/artist/0J6ZEXmLQfZMeHBoa4JZTH?si=qE_CNlHHRr-Tb_MBJl1s9Q" },
            { name: "Oden & Fatzo", time: "2:00 AM - 4:00 AM", spotify: "https://open.spotify.com/artist/2YEnrpAWWaNRFumgde1lLH?si=AtNaUSkWSTWpOx9Yz4Ltcw" },
            { name: "East End Dubs", time: "4:00 AM - 5:30 AM", spotify: "https://open.spotify.com/artist/5nw8Cj9x9XXKDuuNhl5mF7?si=iZOtgW_JSayuXk8h_02DZg" }
        ]
    }
};
export default lineup;
