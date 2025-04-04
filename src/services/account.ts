import http from "@/lib/axios";
import { TransactionsResponse } from "@/types/transactions";

export function PostDocument(url: string){
    return http.post("/documents/", { url })
}

export function CreateTransactionData(url: string){
    return http.post("/transactions", { url })
}

export async function GetTransactionData() {
    return http.get<TransactionsResponse>("/transactions/")
}

export function GetAllAccounts(){
    return http.get("/accounts/")
}

export function getWalletData(id: string) { 
    return http.get(`/users/${id}`)
}