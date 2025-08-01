mergeInto(LibraryManager.library, {
    sendto_js: function(sockfd, packets, sizes, packet_count, seq_num, to, to_len) {
        return moduleArg.sendto?.(sockfd, packets, sizes, packet_count, seq_num, to, to_len) ?? 0
    },
    recvfrom_js: function(sockfd, buf, len, flags, src_addr, addrlen) {
        return moduleArg.recvfrom?.(sockfd, buf, len, flags, src_addr, addrlen) ?? -1
    },
});