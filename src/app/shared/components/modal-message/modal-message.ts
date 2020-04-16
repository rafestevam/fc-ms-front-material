export class ModalMessage {

    constructor(
        public readonly modalType: ModalType,
        public readonly message: string
    ) { }

}

export enum ModalType {
    SUCCESS,
    WARNING,
    DANGER,
    INFO
}