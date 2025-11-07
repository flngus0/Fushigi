#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_shader_draw_parameters : enable
#extension GL_ARB_shader_viewport_layer_array : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 8, std140) uniform _vp_c7
{
    precise vec4 data[4096];
} vp_c7;

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (binding = 7, std140) uniform _vp_c6
{
    precise vec4 data[4096];
} vp_c6;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (location = 0) in vec4 in_attr0;
layout (location = 8) in vec4 in_attr8;
layout (location = 12) in vec4 in_attr12;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;


void main()
{
    precise float temp_0;
    precise float temp_1;
    int temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    int temp_6;
    precise float temp_7;
    int temp_8;
    uint temp_9;
    uint temp_10;
    int temp_11;
    precise float temp_12;
    int temp_13;
    uint temp_14;
    int temp_15;
    precise float temp_16;
    int temp_17;
    uint temp_18;
    uint temp_19;
    int temp_20;
    precise float temp_21;
    int temp_22;
    uint temp_23;
    int temp_24;
    precise float temp_25;
    int temp_26;
    uint temp_27;
    uint temp_28;
    int temp_29;
    precise float temp_30;
    precise float temp_31;
    precise float temp_32;
    precise float temp_33;
    precise float temp_34;
    precise float temp_35;
    precise float temp_36;
    precise float temp_37;
    int temp_38;
    uint temp_39;
    uint temp_40;
    int temp_41;
    precise float temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    precise float temp_119;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0xEFD87F800807FF09 Ald
    temp_0 = in_attr0.x;
    // 0x000010: 0x4CB0119002371A00 F2i
    temp_1 = trunc(vp_c4.data[8].w);
    temp_2 = int(temp_1);
    // 0x000018: 0xEFD87F800847FF0B Ald
    temp_3 = in_attr0.y;
    // 0x000028: 0xEFD87F800887FF0E Ald
    temp_4 = in_attr0.z;
    // 0x000030: 0xEFD87F801047FF0C Ald
    temp_5 = in_attr8.y;
    // 0x000038: 0x3848000000470005 Shl
    temp_6 = temp_2 << 4;
    // 0x000048: 0xEFD87F801007FF0D Ald
    temp_7 = in_attr8.x;
    // 0x000050: 0xEF95007048070502 Ldc
    temp_8 = temp_6 + 0x480;
    temp_9 = uint(temp_8) >> 2;
    temp_10 = temp_9 >> 2;
    temp_11 = int(temp_9) & 3;
    temp_12 = vp_c7.data[int(temp_10)][temp_11];
    temp_13 = int(temp_9) + 1;
    temp_14 = uint(temp_13) >> 2;
    temp_15 = temp_13 & 3;
    temp_16 = vp_c7.data[int(temp_14)][temp_15];
    // 0x000058: 0xEF95007068070500 Ldc
    temp_17 = temp_6 + 0x680;
    temp_18 = uint(temp_17) >> 2;
    temp_19 = temp_18 >> 2;
    temp_20 = int(temp_18) & 3;
    temp_21 = vp_c7.data[int(temp_19)][temp_20];
    temp_22 = int(temp_18) + 1;
    temp_23 = uint(temp_22) >> 2;
    temp_24 = temp_22 & 3;
    temp_25 = vp_c7.data[int(temp_23)][temp_24];
    // 0x000068: 0xEF9400706887050A Ldc
    temp_26 = temp_6 + 0x688;
    temp_27 = uint(temp_26) >> 2;
    temp_28 = temp_27 >> 2;
    temp_29 = int(temp_27) & 3;
    temp_30 = vp_c7.data[int(temp_28)][temp_29];
    // 0x000070: 0x4C68101000070904 Fmul
    temp_31 = temp_0 * vp_c4.data[0].x;
    // 0x000078: 0x4C68101000470906 Fmul
    temp_32 = temp_0 * vp_c4.data[1].x;
    // 0x000088: 0x4C68101000870909 Fmul
    temp_33 = temp_0 * vp_c4.data[2].x;
    // 0x000090: 0x49A0021000170B04 Ffma
    temp_34 = fma(temp_3, vp_c4.data[0].y, temp_31);
    // 0x000098: 0x49A0031000570B07 Ffma
    temp_35 = fma(temp_3, vp_c4.data[1].y, temp_32);
    // 0x0000A8: 0x49A0049000970B09 Ffma
    temp_36 = fma(temp_3, vp_c4.data[2].y, temp_33);
    // 0x0000B0: 0x4C9807940037000B Mov
    // 0x0000B8: 0x49A0021000270E06 Ffma
    temp_37 = fma(temp_4, vp_c4.data[0].z, temp_34);
    // 0x0000C8: 0xEF94007048870504 Ldc
    temp_38 = temp_6 + 0x488;
    temp_39 = uint(temp_38) >> 2;
    temp_40 = temp_39 >> 2;
    temp_41 = int(temp_39) & 3;
    temp_42 = vp_c7.data[int(temp_40)][temp_41];
    // 0x0000D0: 0x49A0039000670E08 Ffma
    temp_43 = fma(temp_4, vp_c4.data[1].z, temp_35);
    // 0x0000D8: 0xEFD87F8014C7FF05 Ald
    temp_44 = in_attr12.w;
    // 0x0000E8: 0x4C58101000370607 Fadd
    temp_45 = temp_37 + vp_c4.data[0].w;
    // 0x0000F0: 0x4C98079400270006 Mov
    // 0x0000F8: 0x49A0049000A70E09 Ffma
    temp_46 = fma(temp_4, vp_c4.data[2].z, temp_36);
    // 0x000108: 0x4C58101000770808 Fadd
    temp_47 = temp_43 + vp_c4.data[1].w;
    // 0x000110: 0x59A0000000270707 Ffma
    temp_48 = fma(temp_45, temp_12, temp_21);
    // 0x000118: 0x51A0031400470C00 Ffma
    temp_49 = fma(temp_5, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x000128: 0x51A0059400570C02 Ffma
    temp_50 = fma(temp_5, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000130: 0x4C58101000B70909 Fadd
    temp_51 = temp_46 + vp_c4.data[2].w;
    // 0x000138: 0x59A0008000370808 Ffma
    temp_52 = fma(temp_47, temp_16, temp_25);
    // 0x000148: 0x4C5830180B070703 Fadd
    temp_53 = 0.0 - vp_c6.data[44].x;
    temp_54 = temp_48 + temp_53;
    // 0x000150: 0x49A0001400070D01 Ffma
    temp_55 = fma(temp_7, vp_c5.data[0].x, temp_49);
    // 0x000158: 0x49A0011400170D00 Ffma
    temp_56 = fma(temp_7, vp_c5.data[0].y, temp_50);
    // 0x000168: 0xEFF07F800A07FF01 Ast
    out_attr2.x = temp_55;
    // 0x000170: 0x4C68100C00070702 Fmul
    temp_57 = temp_48 * vp_c3.data[0].x;
    // 0x000178: 0xEFF07F800A47FF00 Ast
    out_attr2.y = temp_56;
    // 0x000188: 0x4C5830180B17080C Fadd
    temp_58 = 0.0 - vp_c6.data[44].y;
    temp_59 = temp_52 + temp_58;
    // 0x000190: 0xEFF07F8008C7FF05 Ast
    out_attr0.w = temp_44;
    // 0x000198: 0x4C68101803870303 Fmul
    temp_60 = temp_54 * vp_c6.data[14].x;
    // 0x0001A8: 0x4C68100C00870706 Fmul
    temp_61 = temp_48 * vp_c3.data[2].x;
    // 0x0001B0: 0x59A0050000470909 Ffma
    temp_62 = fma(temp_51, temp_42, temp_30);
    // 0x0001B8: 0x49A0010C0017080B Ffma
    temp_63 = fma(temp_52, vp_c3.data[0].y, temp_57);
    // 0x0001C8: 0x4C68100C0047070A Fmul
    temp_64 = temp_48 * vp_c3.data[1].x;
    // 0x0001D0: 0x4C5810180B97080D Fadd
    temp_65 = temp_52 + vp_c6.data[46].y;
    // 0x0001D8: 0x49A0019803970C02 Ffma
    temp_66 = fma(temp_59, vp_c6.data[14].y, temp_60);
    // 0x0001E8: 0x4C5810180B870703 Fadd
    temp_67 = temp_48 + vp_c6.data[46].x;
    // 0x0001F0: 0x49A0030C00970807 Ffma
    temp_68 = fma(temp_52, vp_c3.data[2].y, temp_61);
    // 0x0001F8: 0x49A0058C00270906 Ffma
    temp_69 = fma(temp_62, vp_c3.data[0].z, temp_63);
    // 0x000208: 0x4C5810180BA7090E Fadd
    temp_70 = temp_62 + vp_c6.data[46].z;
    // 0x000210: 0x4C58101002070904 Fadd
    temp_71 = temp_62 + vp_c4.data[8].x;
    // 0x000218: 0x49A0050C0057080A Ffma
    temp_72 = fma(temp_52, vp_c3.data[1].y, temp_64);
    // 0x000228: 0x4C98079803C70005 Mov
    // 0x000230: 0x4C58100C0037060C Fadd
    temp_73 = temp_69 + vp_c3.data[0].w;
    // 0x000238: 0x4C6810180C670E10 Fmul
    temp_74 = temp_70 * vp_c6.data[49].z;
    // 0x000248: 0x4C6810180C270E0F Fmul
    temp_75 = temp_70 * vp_c6.data[48].z;
    // 0x000250: 0x4C6810180CA70E0E Fmul
    temp_76 = temp_70 * vp_c6.data[50].z;
    // 0x000258: 0x49A0058C0027040B Ffma
    temp_77 = fma(temp_71, vp_c3.data[0].z, temp_63);
    // 0x000268: 0x49A0050C00670908 Ffma
    temp_78 = fma(temp_62, vp_c3.data[1].z, temp_72);
    // 0x000270: 0x49A0050C00670406 Ffma
    temp_79 = fma(temp_71, vp_c3.data[1].z, temp_72);
    // 0x000278: 0x49A0038C00A70404 Ffma
    temp_80 = fma(temp_71, vp_c3.data[2].z, temp_68);
    // 0x000288: 0x4C68101802C70C0A Fmul
    temp_81 = temp_73 * vp_c6.data[11].x;
    // 0x000290: 0x49A0038C00A70907 Ffma
    temp_82 = fma(temp_62, vp_c3.data[2].z, temp_68);
    // 0x000298: 0x4C5830180B27090C Fadd
    temp_83 = 0.0 - vp_c6.data[44].z;
    temp_84 = temp_62 + temp_83;
    // 0x0002A8: 0x49A008180C570D10 Ffma
    temp_85 = fma(temp_65, vp_c6.data[49].y, temp_74);
    // 0x0002B0: 0x49A007980C170D09 Ffma
    temp_86 = fma(temp_65, vp_c6.data[48].y, temp_75);
    // 0x0002B8: 0x49A007180C970D0E Ffma
    temp_87 = fma(temp_65, vp_c6.data[50].y, temp_76);
    // 0x0002C8: 0x4C58100C00370B0B Fadd
    temp_88 = temp_77 + vp_c3.data[0].w;
    // 0x0002D0: 0x4C58100C00770808 Fadd
    temp_89 = temp_78 + vp_c3.data[1].w;
    // 0x0002D8: 0x49A0011803A70C02 Ffma
    temp_90 = fma(temp_84, vp_c6.data[14].z, temp_66);
    // 0x0002E8: 0x49A008180C470310 Ffma
    temp_91 = fma(temp_67, vp_c6.data[49].x, temp_85);
    // 0x0002F0: 0x49A004980C070309 Ffma
    temp_92 = fma(temp_67, vp_c6.data[48].x, temp_86);
    // 0x0002F8: 0x49A007180C87030E Ffma
    temp_93 = fma(temp_67, vp_c6.data[50].x, temp_87);
    // 0x000308: 0x4C68100C02470B01 Fmul
    temp_94 = temp_88 * vp_c3.data[9].x;
    // 0x000310: 0x4C68100C01C70B00 Fmul
    temp_95 = temp_88 * vp_c3.data[7].x;
    // 0x000318: 0x4C68100C02870B03 Fmul
    temp_96 = temp_88 * vp_c3.data[10].x;
    // 0x000328: 0x4C58100C00770606 Fadd
    temp_97 = temp_79 + vp_c3.data[1].w;
    // 0x000330: 0x4C68100C02070B0B Fmul
    temp_98 = temp_88 * vp_c3.data[8].x;
    // 0x000338: 0x49A0051802D70808 Ffma
    temp_99 = fma(temp_89, vp_c6.data[11].y, temp_81);
    // 0x000348: 0x4C58100C00B70707 Fadd
    temp_100 = temp_82 + vp_c3.data[2].w;
    // 0x000350: 0x51A0029803B70205 Ffma
    temp_101 = fma(temp_90, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000358: 0xEFF07F800987FF07 Ast
    out_attr1.z = temp_100;
    // 0x000368: 0x4C58100C00B70404 Fadd
    temp_102 = temp_80 + vp_c3.data[2].w;
    // 0x000370: 0xEFF07F800B47FF05 Ast
    out_attr3.y = temp_101;
    // 0x000378: 0x49A0008C02570601 Ffma
    temp_103 = fma(temp_97, vp_c3.data[9].y, temp_94);
    // 0x000388: 0x49A0000C01D70602 Ffma
    temp_104 = fma(temp_97, vp_c3.data[7].y, temp_95);
    // 0x000390: 0x49A0018C02970603 Ffma
    temp_105 = fma(temp_97, vp_c3.data[10].y, temp_96);
    // 0x000398: 0x49A0058C0217060B Ffma
    temp_106 = fma(temp_97, vp_c3.data[8].y, temp_98);
    // 0x0003A8: 0x49A0041802E70708 Ffma
    temp_107 = fma(temp_100, vp_c6.data[11].z, temp_99);
    // 0x0003B0: 0x4C98079803070007 Mov
    // 0x0003B8: 0x49A0008C02670401 Ffma
    temp_108 = fma(temp_102, vp_c3.data[9].z, temp_103);
    // 0x0003C8: 0x49A0010C01E70402 Ffma
    temp_109 = fma(temp_102, vp_c3.data[7].z, temp_104);
    // 0x0003D0: 0x49A0018C02A70403 Ffma
    temp_110 = fma(temp_102, vp_c3.data[10].z, temp_105);
    // 0x0003D8: 0x49A0058C0227040B Ffma
    temp_111 = fma(temp_102, vp_c3.data[8].z, temp_106);
    // 0x0003E8: 0x4C6810180BB71010 Fmul
    temp_112 = temp_91 * vp_c6.data[46].w;
    // 0x0003F0: 0x4C6810180BB70909 Fmul
    temp_113 = temp_92 * vp_c6.data[46].w;
    // 0x0003F8: 0xEFF07F800C47FF10 Ast
    out_attr4.y = temp_112;
    // 0x000408: 0x4C6810180BB70E0E Fmul
    temp_114 = temp_93 * vp_c6.data[46].w;
    // 0x000410: 0xEFF07F800C07FF09 Ast
    out_attr4.x = temp_113;
    // 0x000418: 0x51A0039802F70808 Ffma
    temp_115 = fma(temp_107, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000428: 0xEFF07F800C87FF0E Ast
    out_attr4.z = temp_114;
    // 0x000430: 0x4C58100C02770101 Fadd
    temp_116 = temp_108 + vp_c3.data[9].w;
    // 0x000438: 0xEFF07F800B07FF08 Ast
    out_attr3.x = temp_115;
    // 0x000448: 0x4C58100C01F70202 Fadd
    temp_117 = temp_109 + vp_c3.data[7].w;
    // 0x000450: 0xEFF07F800787FF01 Ast
    gl_Position.z = temp_116;
    // 0x000458: 0x4C58100C02B70303 Fadd
    temp_118 = temp_110 + vp_c3.data[10].w;
    // 0x000468: 0xEFF07F800707FF02 Ast
    gl_Position.x = temp_117;
    // 0x000470: 0x4C58100C02370B0B Fadd
    temp_119 = temp_111 + vp_c3.data[8].w;
    // 0x000478: 0xEFF07F8007C7FF03 Ast
    gl_Position.w = temp_118;
    // 0x000488: 0xEFF07F800747FF0B Ast
    gl_Position.y = temp_119;
    // 0x000490: 0xE30000000007000F Exit
    return;
}
