"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAgentFactory = void 0;
const useragents = [{ platfrom: "Windows", os: ["Windows NT 10.0; Win64; x64", "Windows NT 6.1; Win64; x64", "Windows NT 10.0; WOW64", "Windows NT 6.3; Win64; x64", "Windows NT 6.4; WOW64", "Windows NT 6.2; Win64; x64"] }, { platfrom: "Linux", os: ["X11; Linux x86_64", "X11; Ubuntu; Linux x86_64"] }, { platfrom: "Machintos", os: ["Macintosh; Intel Mac OS X 10_15_7", "Macintosh; Intel Mac OS X 10_13_6", "Macintosh; Intel Mac OS X 10_14_0", "Macintosh; Intel Mac OS X 10_14_4", "Macintosh; Intel Mac OS X 10_12_6", "Macintosh; Intel Mac OS X 10_15_3", "Macintosh; Intel Mac OS X 10_15_6", "Macintosh; Intel Mac OS X 10_14_6", "Macintosh; Intel Mac OS X 10_14", "Macintosh; Intel Mac OS X 10_14_1", "Macintosh; Intel Mac OS X 10_14_2", "Macintosh; Intel Mac OS X 10_15_2", "Macintosh; Intel Mac OS X 10_14_5", "Macintosh; Intel Mac OS X 10_15_4"] }], android = [{ platfrom: "android", buildCode: [{ version: "7.0.0", buildCodes: ["NRD90M", "NRD90R", "NRD90S", "NRD90T", "NRD90U", "NRD91D", "NBD90W", "NBD90X", "NBD90Z", "NRD91N", "NRD91K", "NBD91P", "N5D91L", "NBD91U", "NBD91Y", "NBD91Z", "NBD92D", "NBD92E", "NBD92F", "NBD92G"] }, { version: "7.1.1", buildCodes: ["NMF26F", "NMF26H", "NMF26J", "NMF26O", "NMF26Q", "NMF26R", "NMF26U", "NMF26V", "N4F26I", "N4F26J", "N4F26M", "N6F26Q", "N4F26O", "N4F26Q", "NUF26K", "N6F26R", "NOF26V", "NOF26W", "NMF26X", "NMF27D", "N4F26T", "NOF27B", "NOF27C", "NUF26N", "N6F26U", "N4F26U", "N4F26X", "NOF27D"] }, { version: "7.1.2", buildCodes: ["N2G47D", "N2G47E", "N2G47F", "N2G47H", "N2G47J"] }, { version: "8.0.0", buildCodes: ["OPR6.170623.010", "OPR6.170623.011", "OPR6.170623.012", "OPR6.170623.013", "OPR1.170623.026"] }, { version: "8.1.0", buildCodes: ["OPM1.171019.011", "OPM2.171019.012", "OPM1.171019.012", "OPM1.171019.013", "OPM1.171019.014", "6826376", "6780335", "6644286", "6560352", "6495665", "6454887", "6440157", "6197208"] }, { version: "9.0.0", buildCodes: ["PPR1.180610.009", "PPR1.180610.010", "PPR1.180610.011", "5748468", "5794013", "5887210", "6826377", "6780336", "6644287", "PQ3A.190705.003", "PQ3B.190705.003", "PQ3A.190801.002", "PQ3B.190801.002", "PQ3A.190705.001"] }, { version: "10.0.0", buildCodes: ["QP1A.190711.019", "QP1A.190711.020", "QP1A.190711.020.C3", "QP1A.191005.007", "QP1A.191005.007.A1", "5933585", "QD4A.200805.003", "QD4A.200805.001", "QQ3A.200605.002", "QD4A.200317.024.A1", "QD4A.200317.027", "6777444", "6780337", "RP1A.200720.009", "RP1A.200720.010", "RP1A.200720.011", "RP1A.201005.004", "RP1A.201005.006"] }], devicesRandom: ["Nexus 5X", "SM-G935A", "SM-G891A", "ONEPLUS A3003", "SM-G891A", "SM-G925F", "GT-I9505", "SM-G935V", "SM-G935F", "SM-G920F", "SM-T713", "ASUS_A001", "ASUS_A006", "ASUS_X008D", "ASUS_X008DA", "ASUS_Z017D", "ASUS_X008DB", "Nexus 9", "Pixel C", "Nexus 6P", "Nexus 6", "SM-G930T", "SM-G955U", "SM-G930F", "SC-05G", "HTC 10", "SM-A520F", "Vivo 5R", "SCV36", "SM-G920V", "LG-M150", "LGL158VL", "LG-H860", "5049W", "Infinix X559C", "P00C", "Lenovo TB-7304X", "HTC 10 evo", "LG-LS993", "E1051X", "Ixion M545", "HTC One M9", "Formuler Z8", "BV8000Pro", "BQ-5008L", "CITI ATL 4G CS5029ML", "E1041X", "S2 LITE", "SM-T813", "HORIZON", "G155", "S2_PRO", "K6000 Plus", "SC-02H", "LGMP450", "FS526", "FS528", "LG-M257", "Infinix HOT 4", "BV7000", "Infinix X603", "LGMS210", "TFQCOAL01232", "SM-T819", "LG-M150", "Grand Pro", "LG-H870", "MI 5s", "X20L", "Redmi Note 4X", "MT-107", "HTC_0PJA10", "PSP7512DUO", "Pixel 2 XL", "Pixel 3", "LEX722", "SM-N975F", "SM-T350", "SM-A750FN", "SM-A105G", "SM-J701F", "SM-G530BT", "SM-G530F", "SM-G530FQ", "SM-G530T", "SM-G530W", "SM-G850F", "SM-G850K", "SM-G850M", "SM-G850W", "SM-G130H", "SM-N910G", "SM-N9150", "SM-N915G", "SM-G360H", "SM-E500H", "SM-E500F", "SM-G9209", "SM-G9208", "SM-G9200", "SM-G920V", "SM-G530FZ", "SM-G530H", "SM-G530M", "SM-G530R7", "SM-G530Y", "SM-G850FQ", "SM-G850L", "SM-G360BT", "SM-A3009", "SM-A300HQ", "SM-A300M", "SM-A5009", "SM-A7009W", "SM-A7009", "SM-A700F", "SM-G920TR", "SM-A605", "SM-J737", "SM-J610", "SM-J415", "SM-A750", "SM-A115", "SM-A115", "SM-A115", "SM-A315", "SM-P615", "SM-P610N", "SM-A716N", "SM-J260", "SM-M015", "SM-A716V", "SM-M017", "SM-A013", "SM-T970", "SM-F707", "SM-M515", "SM-J800", "SM-G8850", "SM-J737", "SM-A605", "SM-J400", "SM-G611", "SM-G960", "SM-J106F", "ZenFone Max Pro M1", "ASUS_X00TD", "Redmi Note 7", "Mi A2", "MI 9", "Redmi Note 6 Pro", "Mi A1", "F17 Pro", "F15", "F11 Pro", "A33", "A3s", "A1k", "A5", "A31", "A52", "Reno Z", "Reno", "Reno 5G", "Reno4", "Reno4 Pro", "Reno4 Z 4G", "Reno3 Pro 5G"], samsung: ["SM-T813", "SM-G935A", "SM-G891A", "ONEPLUS A3003", "SM-G891A", "SM-G925F", "GT-I9505", "SM-G935V", "SM-G935F", "SM-G920F", "SM-T713", "SM-G930T", "SM-G955U", "SM-G930F", "SM-N975F", "SM-T350", "SM-A750FN", "SM-A105G", "SM-J701F", "SM-G530BT", "SM-G530F", "SM-G530FQ", "SM-G530T", "SM-G530W", "SM-G850F", "SM-G850K", "SM-G850M", "SM-G850W", "SM-G130H", "SM-N910G", "SM-N9150", "SM-N915G", "SM-G360H", "SM-E500H", "SM-E500F", "SM-G9209", "SM-G9208", "SM-G9200", "SM-G920V", "SM-G530FZ", "SM-G530H", "SM-G530M", "SM-G530R7", "SM-G530Y", "SM-G850FQ", "SM-G850L", "SM-G360BT", "SM-A3009", "SM-A300HQ", "SM-A300M", "SM-A5009", "SM-A7009W", "SM-A7009", "SM-A700F", "SM-G920TR", "SM-A605", "SM-J737", "SM-J610", "SM-J415", "SM-A750", "SM-A115", "SM-A115", "SM-A115", "SM-A315", "SM-P615", "SM-P610N", "SM-A716N", "SM-J260", "SM-M015", "SM-A716V", "SM-M017", "SM-A013", "SM-T970", "SM-F707", "SM-M515", "SM-J800", "SM-G8850", "SM-J737", "SM-A605", "SM-J400", "SM-G611", "SM-G960", "SM-J106F"] }];
const ios = [{ version: ["14.0", "14.0.1", "14.1", "14.2", "14.2.1", "14.3", "14.4", "14.4.1", "14.4.2", "14.5", "14.5.1", "14.6", "14.7", "14.8.1"], buildIOS: ["18A373", "18A393", "18A8395", "18B92", "18B121", "18C66", "18D52", "18D61", "18D70", "18E199", "18E212", "18F72", "18G69", "18H107"] }], browser = [{ platfrom: "chrome", version: ["95.0.4638.54", "94.0.4606.81", "94.0.4606.61", "93.0.4577.63", "92.0.4515.159", "92.0.4515.131", "92.0.4515.107", "91.0.4472.164", "91.0.4472.124", "91.0.4472.114", "91.0.4472.101", "91.0.4472.77", "90.0.4430.212", "90.0.4430.85", "90.0.4430.72", "89.0.4389.114", "89.0.4389.90", "89.0.4389.82", "87.0.4280.141", "87.0.4280.88", "87.0.4280.66", "86.0.4240.198", "86.0.4240.111", "86.0.4240.75", "85.0.4183.121", "85.0.4183.102", "85.0.4183.83", "84.0.4147.135", "84.0.4147.125", "84.0.4147.105", "84.0.4147.89", "83.0.4103.116", "83.0.4103.106", "83.0.4103.97", "83.0.4103.61", "81.0.4044.138", "81.0.4044.129", "81.0.4044.122", "81.0.4044.92", "80.0.3987.163", "80.0.3987.149", "80.0.3987.132", "80.0.3987.122", "80.0.3987.116", "80.0.3987.87", "79.0.3945.130", "79.0.3945.117", "79.0.3945.88", "79.0.3945.79", "78.0.3904.108", "78.0.3904.97", "78.0.3904.87", "78.0.3904.70", "77.0.3865.120", "77.0.3865.90", "77.0.3865.75", "76.0.3809.132", "76.0.3809.100", "75.0.3770.142", "75.0.3770.100", "75.0.3770.90", "75.0.3770.80", "74.0.3729.169", "74.0.3729.159", "74.0.3729.136", "74.0.3729.108", "73.0.3683.103", "73.0.3683.88", "73.0.3683.75", "72.0.3626.121", "72.0.3626.119", "72.0.3626.96", "72.0.3626.81", "71.0.3578.98", "71.0.3578.80", "70.0.3538.110"] }, { platfrom: "firefox", version: ["94.1.2", "94.1.1", "94.1.0", "93.2.0", "93.1.0", "92.1.1", "92.1.0", "91.4.0", "91.3.1", "91.3.0", "91.2.0", "91.1.0", "90.1.3", "90.1.2", "90.1.1", "90.1.0", "89.1.1", "89.1.0", "88.1.4", "88.1.3", "88.1.2", "88.1.1", "88.1.0", "86.1.1", "86.1.0", "85.1.3", "85.1.2", "85.1.1", "85.1.0", "84.1.4", "84.1.3", "84.1.2", "84.1.1", "84.1.0", "83.1.0", "88.1.2", "88.1.1", "88.1.0", "86.1.1", "86.1.0", "85.1.3", "85.1.2", "85.1.1", "85.1.0", "84.1.4", "84.1.3", "84.1.2", "84.1.1", "84.1.0", "83.1.0", "88.1.2", "88.1.1", "88.1.0", "86.1.1", "86.1.0", "85.1.3", "85.1.2", "85.1.1", "85.1.0", "84.1.4", "84.1.3", "84.1.2", "84.1.1", "84.1.0", "83.1.0", "88.1.2", "88.1.1", "88.1.0", "86.1.1", "86.1.0", "85.1.3", "85.1.2", "85.1.1", "85.1.0", "84.1.4", "84.1.3", "84.1.2", "84.1.1", "84.1.0", "83.1.0", "88.1.2", "88.1.1", "88.1.0", "86.1.1", "86.1.0", "85.1.3", "85.1.2", "85.1.1", "85.1.0", "84.1.4", "84.1.3", "84.1.2", "84.1.1", "84.1.0", "83.1.0", "88.1.2", "88.1.1", "88.1.0", "86.1.1", "86.1.0", "85.1.3", "85.1.2", "85.1.1", "85.1.0", "84.1.4", "84.1.3", "84.1.2", "84.1.1", "84.1.0", "83.1.0", "88.1.2", "88.1.1", "88.1.0", "86.1.1", "86.1.0", "85.1.3", "85.1.2", "85.1.1", "85.1.0", "84.1.4", "84.1.3", "84.1.2", "84.1.1", "84.1.0", "83.1.0", "70.0", "70.0.1", "76.0", "76.0.1", "75.0", "74.0", "74.0.1", "73.0", "73.0.1", "72.0", "72.0.1", "72.0.2", "71.0", "94.0", "94.0.1", "94.0.2", "93.0", "92.0", "92.0.1", "91.0", "91.0.1", "91.0.2", "91.1.0", "91.2.0", "91.3.0", "90.0", "90.0.1", "90.0.2", "89.0", "89.0.1", "89.0.2", "88.0", "88.0.1", "87.0", "86.0", "86.0.1", "85.0", "85.0.1", "85.0.2", "84.0", "84.0.1", "84.0.2", "83.0", "82.0", "82.0.1", "82.0.2", "82.0.3", "81.0", "81.0.1", "81.0.2", "80.0", "80.0.1", "79.0", "78.0", "78.0.1", "78.0.2", "78.1.0", "78.2.0", "78.3.0", "78.3.1", "78.4.0", "78.4.1", "78.5.0", "78.6.0", "78.6.1", "78.7.0", "78.7.1", "78.8.0", "78.9.0", "78.10.0", "78.10.1", "78.11.0", "78.12.0", "78.13.0", "78.14.0", "78.15.0", "77.0", "77.0.1"] }, { platfrom: "safari", version: ["11.1", "11.1.2", "11.2", "11.2.2", "11.2.1", "11.2.5", "11.2.6", "11.3", "11.4.1", "12.0", "12.0.1", "12.2", "12.3", "12.3.1", "12.3.2", "12.4", "12.4.1", "12.4.2", "12.1", "13.0", "13.0.1", "13.0.2", "13.0.3", "13.0.4", "14.0", "14.1", "14.2", "14.3", "14.4", "14.4", "15.0"] }, { platfrom: "samsungbrowser", version: ["16.0.2.19", "16.0.1.61", "16.0.1.57", "16.0.1.42", "16.0.1.5", "15.0.7.5", "15.0.6.3", "15.0.6.3", "15.0.5.10", "15.0.5.10", "15.0.4.9", "15.0.4.9", "15.0.2.47", "15.0.2.47", "14.2.4.1", "14.2.3.14", "14.2.1.69", "14.0.3.7", "14.0.3.6", "14.0.3.5", "14.0.1.62", "14.0.1.62", "14.0.1.62", "13.2.3.5", "13.2.3.2", "13.2.3.2", "13.2.3.2", "13.2.2.4", "13.2.2.4", "13.2.2.4", "13.2.2.1", "13.2.1.70", "13.2.1.70", "13.2.1.70", "13.2.1.69", "13.0.2.10", "13.0.2.9", "13.0.2.9", "13.0.2.9", "13.0.1.65", "14.0.1.62", "14.0.1.62", "14.0.1.62", "13.2.3.5", "13.2.3.2", "13.2.3.2", "13.2.3.2", "13.2.2.4", "13.2.2.4", "13.2.2.4", "13.2.2.1", "13.2.1.70", "13.2.1.70", "13.2.1.70", "13.2.1.69", "13.0.2.10", "13.0.2.9", "13.0.2.9", "13.0.2.9", "13.0.1.65", "14.0.1.62", "14.0.1.62", "14.0.1.62", "13.2.3.5", "13.2.3.2", "13.2.3.2", "13.2.3.2", "13.2.2.4", "13.2.2.4", "13.2.2.4", "13.2.2.1", "13.2.1.70", "13.2.1.70", "13.2.1.70", "13.2.1.69", "13.0.2.10", "13.0.2.9", "13.0.2.9", "13.0.2.9", "13.0.1.65", "14.0.1.62", "14.0.1.62", "14.0.1.62", "13.2.3.5", "13.2.3.2", "13.2.3.2", "13.2.3.2", "13.2.2.4", "13.2.2.4", "13.2.2.4", "13.2.2.1", "13.2.1.70", "13.2.1.70", "13.2.1.70", "13.2.1.69", "13.0.2.10", "13.0.2.9", "13.0.2.9", "13.0.2.9", "13.0.1.65", "14.0.1.62", "14.0.1.62", "14.0.1.62", "13.2.3.5", "13.2.3.2", "13.2.3.2", "13.2.3.2", "13.2.2.4", "13.2.2.4", "13.2.2.4", "13.2.2.1", "13.2.1.70", "13.2.1.70", "13.2.1.70", "13.2.1.69", "13.0.2.10", "13.0.2.9", "13.0.2.9", "13.0.2.9", "13.0.1.65", "14.0.1.62", "14.0.1.62", "14.0.1.62", "13.2.3.5", "13.2.3.2", "13.2.3.2", "13.2.3.2", "13.2.2.4", "13.2.2.4", "13.2.2.4", "13.2.2.1", "13.2.1.70", "13.2.1.70", "13.2.1.70", "13.2.1.69", "13.0.2.10", "13.0.2.9", "13.0.2.9", "13.0.2.9", "13.0.1.65", "14.0.1.62", "14.0.1.62", "14.0.1.62", "13.2.3.5", "13.2.3.2", "13.2.3.2", "13.2.3.2", "13.2.2.4", "13.2.2.4", "13.2.2.4", "13.2.2.1", "13.2.1.70", "13.2.1.70", "13.2.1.70", "13.2.1.69", "13.0.2.10", "13.0.2.9", "13.0.2.9", "13.0.2.9", "13.0.1.65", "14.0.1.62", "14.0.1.62", "14.0.1.62", "13.2.3.5", "13.2.3.2", "13.2.3.2", "13.2.3.2", "13.2.2.4", "13.2.2.4", "13.2.2.4", "13.2.2.1", "13.2.1.70", "13.2.1.70", "13.2.1.70", "13.2.1.69", "13.0.2.10", "13.0.2.9", "13.0.2.9", "13.0.2.9", "13.0.1.65", "14.0.1.62", "14.0.1.62", "14.0.1.62", "13.2.3.5", "13.2.3.2", "13.2.3.2", "13.2.3.2", "13.2.2.4", "13.2.2.4", "13.2.2.4", "13.2.2.1", "13.2.1.70", "13.2.1.70", "13.2.1.70", "13.2.1.69", "13.0.2.10", "13.0.2.9", "13.0.2.9", "13.0.2.9", "13.0.1.65", "14.0.1.62", "14.0.1.62", "14.0.1.62", "13.2.3.5", "13.2.3.2", "13.2.3.2", "13.2.3.2", "13.2.2.4", "13.2.2.4", "13.2.2.4", "13.2.2.1", "13.2.1.70", "13.2.1.70", "13.2.1.70", "13.2.1.69", "13.0.2.10", "13.0.2.9", "13.0.2.9", "13.0.2.9", "13.0.1.65", "14.0.1.62", "14.0.1.62", "14.0.1.62", "13.2.3.5", "13.2.3.2", "13.2.3.2", "13.2.3.2", "13.2.2.4", "13.2.2.4", "13.2.2.4", "13.2.2.1", "13.2.1.70", "13.2.1.70", "13.2.1.70", "13.2.1.69", "13.0.2.10", "13.0.2.9", "13.0.2.9", "13.0.2.9", "13.0.1.65", "14.0.1.62", "14.0.1.62", "14.0.1.62", "13.2.3.5", "13.2.3.2", "13.2.3.2", "13.2.3.2", "13.2.2.4", "13.2.2.4", "13.2.2.4", "13.2.2.1", "13.2.1.70", "13.2.1.70", "13.2.1.70", "13.2.1.69", "13.0.2.10", "13.0.2.9", "13.0.2.9", "13.0.2.9", "13.0.1.65", "14.0.1.62", "14.0.1.62", "14.0.1.62", "13.2.3.5", "13.2.3.2", "13.2.3.2", "13.2.3.2", "13.2.2.4", "13.2.2.4", "13.2.2.4", "13.2.2.1", "13.2.1.70", "13.2.1.70", "13.2.1.70", "13.2.1.69", "13.0.2.10", "13.0.2.9", "13.0.2.9", "13.0.2.9", "13.0.1.65", "14.0.1.62", "14.0.1.62", "14.0.1.62", "13.2.3.5", "13.2.3.2", "13.2.3.2", "13.2.3.2", "13.2.2.4", "13.2.2.4", "13.2.2.4", "13.2.2.1", "13.2.1.70", "13.2.1.70", "13.2.1.70", "13.2.1.69", "13.0.2.10", "13.0.2.9", "13.0.2.9", "13.0.2.9", "13.0.1.65"] }, { platfrom: "edge", version: ["95.0.1020.53", "94.0.992.50", "94.0.992.37", "94.0.992.31", "92.0.902.55", "91.0.864.71", "91.0.864.70", "91.0.864.53", "90.0.818.62", "90.0.818.56", "90.0.818.42", "89.0.774.50", "89.0.774.45", "87.0.664.52", "87.0.664.47", "86.0.622.68", "86.0.622.61", "86.0.622.56", "86.0.622.48", "85.0.564.44", "84.0.522.61", "84.0.522.58", "84.0.522.52", "84.0.522.40", "83.0.478.58", "83.0.478.37", "81.0.416.77", "81.0.416.62", "81.0.416.58", "80.0.361.109", "81.0.416.34", "80.0.361.62", "80.0.361.48", "79.0.309.71", "79.0.309.68", "79.0.309.65", "79.0.309.30", "79.0.309.11", "84.0.522.61", "84.0.522.58", "84.0.522.52", "84.0.522.40", "83.0.478.58", "83.0.478.37", "81.0.416.77", "81.0.416.62", "81.0.416.58", "80.0.361.109", "81.0.416.34", "80.0.361.62", "80.0.361.48", "79.0.309.71", "79.0.309.68", "79.0.309.65", "79.0.309.30", "79.0.309.11", "84.0.522.61", "84.0.522.58", "84.0.522.52", "84.0.522.40", "83.0.478.58", "83.0.478.37", "81.0.416.77", "81.0.416.62", "81.0.416.58", "80.0.361.109", "81.0.416.34", "80.0.361.62", "80.0.361.48", "79.0.309.71", "79.0.309.68", "79.0.309.65", "79.0.309.30", "79.0.309.11", "84.0.522.61", "84.0.522.58", "84.0.522.52", "84.0.522.40", "83.0.478.58", "83.0.478.37", "81.0.416.77", "81.0.416.62", "81.0.416.58", "80.0.361.109", "81.0.416.34", "80.0.361.62", "80.0.361.48", "79.0.309.71", "79.0.309.68", "79.0.309.65", "79.0.309.30", "79.0.309.11", "84.0.522.61", "84.0.522.58", "84.0.522.52", "84.0.522.40", "83.0.478.58", "83.0.478.37", "81.0.416.77", "81.0.416.62", "81.0.416.58", "80.0.361.109", "81.0.416.34", "80.0.361.62", "80.0.361.48", "79.0.309.71", "79.0.309.68", "79.0.309.65", "79.0.309.30", "79.0.309.11", "84.0.522.61", "84.0.522.58", "84.0.522.52", "84.0.522.40", "83.0.478.58", "83.0.478.37", "81.0.416.77", "81.0.416.62", "81.0.416.58", "80.0.361.109", "81.0.416.34", "80.0.361.62", "80.0.361.48", "79.0.309.71", "79.0.309.68", "79.0.309.65", "79.0.309.30", "79.0.309.11", "84.0.522.61", "84.0.522.58", "84.0.522.52", "84.0.522.40", "83.0.478.58", "83.0.478.37", "81.0.416.77", "81.0.416.62", "81.0.416.58", "80.0.361.109", "81.0.416.34", "80.0.361.62", "80.0.361.48", "79.0.309.71", "79.0.309.68", "79.0.309.65", "79.0.309.30", "79.0.309.11", "18.17763", "18.18362", "18.18363", "18.19041", "96.0.1054.34", "96.0.1054.29", "96.0.1054.8", "95.0.1020.9", "95.0.1020.30", "94.0.992.31", "93.0.961.11", "93.0.961.38", "93.0.961.11", "92.0.902.55", "92.0.902.9", "91.0.864.11", "91.0.864.37", "91.0.864.11", "88.0.705.18", "88.0.705.50", "89.0.774.18", "89.0.774.48", "90.0.818.39", "90.0.818.8"] }, { platfrom: "AndroidRandom", version: ["1.1.1"] }, { platfrom: "randomIOS", version: ["1.1.2"] }];
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function AndroidDevice() {
    let pickRand = getRandomInt(android[0].buildCode.length);
    const pickedBuild = getRandomInt(android[0].buildCode[pickRand].buildCodes.length);
    const androidVersion = android[0].buildCode[pickRand].version;
    const buildCodes = android[0].buildCode[pickRand].buildCodes[pickedBuild];
    const chromePicked = getRandomInt(browser[0].version.length);
    const versions = browser[0].version[chromePicked];
    const pickNumDevice = getRandomInt(android[0].devicesRandom.length);
    const pickSamsung = getRandomInt(android[0].samsung.length);
    const devices = android[0].devicesRandom[pickNumDevice];
    const samsung = android[0].samsung[pickSamsung];
    return {
        androidVersion,
        devices,
        buildCodes,
        versions,
        samsung
    };
}
function userAgentFactory() {
    try {
        const pickedNum_browser = getRandomInt(browser.length);
        const pickedVersion = getRandomInt(browser[pickedNum_browser].version.length);
        const platfrom_browser = browser[pickedNum_browser].platfrom;
        let version = browser[pickedNum_browser].version[pickedVersion];
        const picked_OS = getRandomInt(useragents.length);
        const pickedOS = getRandomInt(useragents[picked_OS].os.length);
        let os = useragents[picked_OS].os[pickedOS];
        let android;
        let webkit;
        let agent_version;
        let { androidVersion, devices, buildCodes, versions, samsung } = AndroidDevice();
        switch (platfrom_browser) {
            case "safari":
                os = useragents[2].os[pickedOS];
                webkit = `AppleWebKit/605.1.15 (KHTML, like Gecko)`;
                agent_version = `Version/${version} Safari/605.1.15`;
                break;
            case "chrome":
                webkit = "AppleWebKit/537.36 (KHTML, like Gecko)";
                agent_version = `Chrome/${version} Safari/537.36`;
                break;
            case "edge":
                os = "Windows NT 10.0; Win64; x64";
                const chrome = browser[0].version[pickedVersion];
                webkit = "AppleWebKit/537.36 (KHTML, like Gecko)";
                agent_version = `Chrome/${chrome} Safari/537.36 Edge/${version}`;
                break;
            case "firefox":
                os = `${os}; rv:${version}`;
                webkit = "Gecko/20100101";
                agent_version = `Firefox/${version}`;
                break;
            case "AndroidRandom":
                android = `Mozilla/5.0 (Linux; Android ${androidVersion}; ${devices} Build/${buildCodes}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${versions} Mobile Safari/537.36`;
                break;
            case "samsungbrowser":
                const pickSamsungNum = getRandomInt(browser[3].version.length);
                const samsungBrowserVersion = browser[3].version[pickSamsungNum];
                android = `Mozilla/5.0 (Linux; Android ${androidVersion}; SAMSUNG ${samsung} Build/${buildCodes}) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/${samsungBrowserVersion} Chrome/${versions} Mobile Safari/537.36`;
                break;
            case "randomIOS":
                const iosPickNum = getRandomInt(ios[0].version.length);
                const iOSVersion = ios[0].version[iosPickNum];
                const iosBuild = ios[0].buildIOS[iosPickNum];
                const str = iOSVersion.replace(".", "_");
                const pickedVersion_1 = getRandomInt(browser[2].version.length);
                version = browser[2].version[pickedVersion_1];
                android = `Mozilla/5.0 (iPhone; CPU iPhone OS ${str} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/${version} Mobile/${iosBuild} Safari/604.1`;
                break;
            default:
                android = platfrom_browser;
        }
        return android != null ? android : `Mozilla/5.0 (${os}) ${webkit} ${agent_version}`;
    }
    catch (error) {
        return {
            error: true,
            message: error.message
        };
    }
}
exports.userAgentFactory = userAgentFactory;
//# sourceMappingURL=useragents.js.map