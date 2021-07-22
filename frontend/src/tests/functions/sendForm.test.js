import { sendFrom } from "../../functions/sendForm";

describe('Function sendFrom', () => {
    let event = {
        firstName: 'mat',
        secondName: 'naw',
        email: 'mat@gm.pl',
        date: '2021-12-12'
    };

    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ msg: 'OK' }),
        })
    );

    beforeEach(() => {
        fetch.mockClear();
    });

    it("Should call fetch one time", async () => {
        const result = await sendFrom(event);

        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it("Should return false without data passed", async () => {
        const result = await sendFrom();

        expect(result).toBe(false)
    });
});