"use client";

import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "./api";

export function useProfile() {
    return useQuery({
        queryKey: ["profile", "me"],
        queryFn: getUserProfile,
    });
}