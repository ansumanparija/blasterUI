export enum BloodGroup {
  A_POSITIVE = "A+",
  A_NEGATIVE = "A-",
  B_POSITIVE = "B+",
  B_NEGATIVE = "B-",
  AB_POSITIVE = "AB+",
  AB_NEGATIVE = "AB-",
  O_POSITIVE = "O+",
  O_NEGATIVE = "O-",
}

export enum BagStatus {
  REGISTERED = "REGISTERED",
  COLLECTED = "COLLECTED",
  TESTED = "TESTED",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  ISSUED = "ISSUED",
  USED = "USED",
}

export enum DonorStatus {
  BLOCKED = "BLOCKED",
  ACTIVE = "ACTIVE",
}

export enum DonorCategory {
  PLATINUM = "PLATINUM",
  GOLD = "GOLD",
  SILVER = "SILVER",
  BRONZE = "BRONZE",
}

export enum DonationRequestStatus {
  REQUESTED = "REQUESTED",
  DONATED = "DONATED",
}
