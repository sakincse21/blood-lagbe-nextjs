interface AreaData {
    districts: {
        name: string;
        upazilas: string[];
    }[];
}

declare module "*.json" {
    const value: AreaData;
    export default value;
}